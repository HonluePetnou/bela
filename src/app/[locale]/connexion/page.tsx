'use client';

import { useState, Suspense } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Mail, Lock, ArrowRight, User } from "lucide-react";

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations('Login');
  const locale = useLocale();
  const base = `/${locale}`;
  
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const registered = searchParams.get("registered");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError(locale === 'fr' ? "Identifiants invalides" : "Invalid credentials");
      } else {
        router.push(`${base}/mon-compte`);
        router.refresh();
      }
    } catch (err) {
      setError(locale === 'fr' ? "Une erreur est survenue" : "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto w-full">
      <div className="card-glass p-8 md:p-10 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#0065CA]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-[#F97316]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-lg">
              <User className="w-8 h-8 text-[#0065CA]" />
            </div>
          </div>
          
          <h1 className="text-3xl font-black mb-8 text-center text-white">
            {t('hero_title')}
          </h1>

          {registered && (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-4 rounded-xl mb-6 text-sm flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
              {locale === 'fr' ? 'Compte créé avec succès ! Connectez-vous.' : 'Account created successfully! Please log in.'}
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-xl mb-6 text-sm flex items-center gap-3 animate-fade-in-up">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              {error}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">{t('email')}</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Mail className="w-5 h-5" />
                </div>
                <input 
                  name="email"
                  type="email" 
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2 ml-1 mr-1">
                <label className="block text-sm font-medium text-gray-400">{t('password')}</label>
                <Link href={`${base}/mot-de-passe-oublie`} className="text-xs text-[#0065CA] hover:text-blue-400 transition-colors">
                  {t('forgot')}
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-500">
                  <Lock className="w-5 h-5" />
                </div>
                <input 
                  name="password"
                  type="password" 
                  className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-[#0065CA]/50 focus:ring-1 focus:ring-[#0065CA]/50 transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full btn-primary py-3.5 justify-center mt-2 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (locale === 'fr' ? "Chargement..." : "Loading...") : t('submit')}
              {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
            </button>
          </form>
          
          <div className="mt-8 text-center text-sm text-gray-500">
            {t('no_account')}{" "}
            <Link href={`${base}/inscription`} className="text-white font-medium hover:text-[#F97316] transition-colors">
              {t('register')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 flex items-center justify-center relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-64 w-96 h-96 bg-[#0065CA]/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="container-custom relative z-10">
        <Suspense fallback={
          <div className="flex justify-center items-center h-64 text-gray-500">
            <div className="animate-spin w-8 h-8 border-2 border-[#0065CA] border-t-transparent rounded-full" />
          </div>
        }>
          <LoginContent />
        </Suspense>
      </div>
    </div>
  );
}
