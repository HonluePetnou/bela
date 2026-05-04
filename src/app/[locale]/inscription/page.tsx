'use client';

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Lock, Phone, User as UserIcon, ArrowRight, UserPlus } from "lucide-react";

function RegisterContent() {
  const router = useRouter();
  const t = useTranslations('Register');
  const locale = useLocale();
  const base = `/${locale}`;

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      if (res.ok) {
        router.push(`${base}/connexion?registered=true`);
      } else {
        const result = await res.json();
        setError(result.error || (locale === 'fr' ? "Une erreur est survenue" : "An error occurred"));
      }
    } catch (err) {
      setError(locale === 'fr' ? "Erreur de connexion" : "Connection error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="card-glass p-8 md:p-10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#0065CA]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
              <UserPlus className="w-8 h-8 text-[#0065CA]" />
            </div>
          </div>
          
          <h1 className="text-3xl font-black mb-8 text-center text-white">
            {t('hero_title')}
          </h1>
          
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-sm flex items-center gap-3 animate-fade-in-up">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              {error}
            </div>
          )}

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('firstname')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input 
                    name="firstName"
                    type="text" 
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all text-sm"
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('lastname')}</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                    <UserIcon className="w-4 h-4" />
                  </div>
                  <input 
                    name="lastName"
                    type="text" 
                    className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all text-sm"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  name="email"
                  type="email" 
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all text-sm"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('phone')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Phone className="w-4 h-4" />
                </div>
                <input 
                  name="phone"
                  type="tel" 
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all text-sm"
                  placeholder="+237 ..."
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('password')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  name="password"
                  type="password" 
                  className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all text-sm"
                  placeholder={t('password_placeholder')}
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn-primary py-3.5 justify-center mt-4 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? t('loading') : t('submit')}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            {t('has_account')}{" "}
            <Link href={`${base}/connexion`} className="text-white font-medium hover:text-[#F97316] transition-colors">
              {t('login')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function RegisterPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-64 w-96 h-96 bg-[#0065CA]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <Suspense fallback={
          <div className="flex justify-center items-center h-64 text-gray-500">
            <div className="animate-spin w-8 h-8 border-2 border-[#0065CA] border-t-transparent rounded-full" />
          </div>
        }>
          <RegisterContent />
        </Suspense>
      </div>
    </div>
  );
}
