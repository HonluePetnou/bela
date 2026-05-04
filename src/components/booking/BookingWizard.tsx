'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { getServices, getAvailableSlots, createBooking } from '@/app/actions/booking';
import { CheckCircle2, ChevronRight, ChevronLeft, CalendarCheck, Car, Wrench, Clock, User } from 'lucide-react';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

const STEP_ICONS = [Car, Wrench, Clock, User, CheckCircle2];

export default function BookingWizard() {
  const { data: session } = useSession();
  const locale = useLocale();
  const fr = locale === 'fr';
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [services, setServices] = useState<any[]>([]);
  const [slots, setSlots] = useState<{ time: string; available: boolean }[]>([]);

  const [formData, setFormData] = useState({
    vehicle: { brand: '', model: '', year: '', licensePlate: '', fuelType: 'diesel' },
    serviceId: '',
    notes: '',
    date: '',
    time: '',
    user: { firstName: '', lastName: '', email: '', phone: '', password: '' },
    acceptCgu: false,
  });

  const [reference, setReference] = useState('');

  useEffect(() => {
    getServices().then(setServices);
    if (session?.user) {
      const user = session.user as any;
      setFormData((prev) => ({
        ...prev,
        user: {
          ...prev.user,
          id: user.id,
          email: user.email || '',
          firstName: user.name?.split(' ')[0] || '',
          lastName: user.name?.split(' ').slice(1).join(' ') || '',
        },
      }));
    }
  }, [session]);

  useEffect(() => {
    if (formData.date) {
      getAvailableSlots(formData.date).then(setSlots);
    }
  }, [formData.date]);

  const updateVehicle = (field: string, value: string) =>
    setFormData((p) => ({ ...p, vehicle: { ...p.vehicle, [field]: value } }));
  const updateUser = (field: string, value: string) =>
    setFormData((p) => ({ ...p, user: { ...p.user, [field]: value } }));
  const updateRoot = (field: string, value: any) =>
    setFormData((p) => ({ ...p, [field]: value }));

  const nextStep = async () => {
    if (step === 5) {
      setLoading(true);
      setError(null);
      const res = await createBooking(formData);
      if (res.error) {
        setError(res.error);
        setLoading(false);
      } else {
        setReference(res.reference || '');
        setStep(6);
        setLoading(false);
      }
    } else {
      setStep((s) => (s < 5 ? ((s + 1) as Step) : s));
    }
  };

  const prevStep = () => setStep((s) => (s > 1 ? ((s - 1) as Step) : s));

  const stepTitles = fr
    ? ['Votre véhicule', 'Service souhaité', 'Choisir un créneau', 'Votre compte', 'Récapitulatif']
    : ['Your vehicle', 'Service needed', 'Choose a slot', 'Your account', 'Summary'];

  // ===== SUCCESS =====
  if (step === 6) {
    return (
      <div className="max-w-lg mx-auto text-center">
        <div className="card-glass rounded-2xl p-10">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border-2 border-green-500/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-green-400" />
          </div>
          <h2 className="text-2xl font-black text-white mb-3">
            {fr ? 'Réservation Confirmée !' : 'Booking Confirmed!'}
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            {fr
              ? 'Votre rendez-vous est programmé. Un email de confirmation vous a été envoyé.'
              : 'Your appointment is scheduled. A confirmation email has been sent to you.'}
          </p>
          {reference && (
            <div className="bg-[#0065CA]/10 border border-[#0065CA]/20 rounded-xl p-4 mb-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                {fr ? 'Référence' : 'Reference'}
              </p>
              <p className="text-2xl font-black text-[#0065CA] tracking-widest">{reference}</p>
            </div>
          )}
          <div className="flex gap-3 justify-center">
            <Link href={`/${locale}/mon-compte`} className="btn-primary text-sm">
              {fr ? 'Mon espace client' : 'My account'}
            </Link>
            <Link href={`/${locale}`} className="btn-outline text-sm">
              {fr ? 'Accueil' : 'Home'}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Step progress */}
      <div className="mb-8">
        {/* Step dots */}
        <div className="flex items-center gap-0">
          {[1, 2, 3, 4, 5].map((s, i) => {
            const Icon = STEP_ICONS[i];
            const isActive = s === step;
            const isCompleted = s < step;
            return (
              <div key={s} className="flex items-center flex-1">
                <div className={`step-dot flex-shrink-0 ${isActive ? 'active' : isCompleted ? 'completed' : 'inactive'}`}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-4 h-4" />}
                </div>
                {i < 4 && (
                  <div
                    className="flex-1 h-0.5 transition-all duration-300"
                    style={{ background: isCompleted ? '#22c55e' : 'rgba(255,255,255,0.1)' }}
                  />
                )}
              </div>
            );
          })}
        </div>
        {/* Step label */}
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xs text-gray-500 uppercase tracking-wide">
            {fr ? `Étape ${step} sur 5` : `Step ${step} of 5`}
          </span>
          <span className="text-sm font-semibold text-white">{stepTitles[step - 1]}</span>
        </div>
        {/* Progress bar */}
        <div className="mt-2 h-1 bg-white/5 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0065CA] to-[#0052a3] transition-all duration-500"
            style={{ width: `${(step / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="card-glass rounded-2xl p-6 lg:p-8">
        <h2 className="text-xl font-bold text-white mb-6">{stepTitles[step - 1]}</h2>

        {error && (
          <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* ===== STEP 1: VEHICLE ===== */}
        {step === 1 && (
          <div className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">{fr ? 'Marque' : 'Make'} *</label>
                <input
                  type="text"
                  value={formData.vehicle.brand}
                  onChange={(e) => updateVehicle('brand', e.target.value)}
                  className="form-input"
                  placeholder={fr ? 'ex: Toyota' : 'e.g. Toyota'}
                />
              </div>
              <div>
                <label className="form-label">{fr ? 'Modèle' : 'Model'} *</label>
                <input
                  type="text"
                  value={formData.vehicle.model}
                  onChange={(e) => updateVehicle('model', e.target.value)}
                  className="form-input"
                  placeholder={fr ? 'ex: RAV4' : 'e.g. RAV4'}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="form-label">{fr ? 'Année' : 'Year'}</label>
                <input
                  type="number"
                  value={formData.vehicle.year}
                  onChange={(e) => updateVehicle('year', e.target.value)}
                  className="form-input"
                  placeholder="2020"
                  min="1990"
                  max="2026"
                />
              </div>
              <div>
                <label className="form-label">{fr ? 'Immatriculation' : 'Registration'}</label>
                <input
                  type="text"
                  value={formData.vehicle.licensePlate}
                  onChange={(e) => updateVehicle('licensePlate', e.target.value)}
                  className="form-input"
                  placeholder={fr ? 'ex: LT 123 AB' : 'e.g. LT 123 AB'}
                />
              </div>
            </div>
            <div>
              <label className="form-label">{fr ? 'Carburant' : 'Fuel type'}</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  { value: 'essence', labelFr: 'Essence', labelEn: 'Petrol' },
                  { value: 'diesel', labelFr: 'Diesel', labelEn: 'Diesel' },
                  { value: 'hybride', labelFr: 'Hybride', labelEn: 'Hybrid' },
                  { value: 'electrique', labelFr: 'Électrique', labelEn: 'Electric' },
                ].map((f) => (
                  <label
                    key={f.value}
                    className={`flex items-center justify-center gap-2 p-3 rounded-lg border cursor-pointer transition-all text-sm font-medium ${
                      formData.vehicle.fuelType === f.value
                        ? 'border-[#0065CA] bg-[#0065CA]/10 text-white'
                        : 'border-white/10 text-gray-500 hover:border-white/20 hover:text-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="fuel"
                      value={f.value}
                      checked={formData.vehicle.fuelType === f.value}
                      onChange={() => updateVehicle('fuelType', f.value)}
                      className="sr-only"
                    />
                    {fr ? f.labelFr : f.labelEn}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ===== STEP 2: SERVICE ===== */}
        {step === 2 && (
          <div className="space-y-4">
            <div className="grid gap-2.5">
              {services.length === 0 ? (
                <div className="text-center py-8 text-gray-500 text-sm">
                  {fr ? 'Chargement des services...' : 'Loading services...'}
                </div>
              ) : (
                services.map((s) => (
                  <label
                    key={s.id}
                    className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                      formData.serviceId === s.id
                        ? 'border-[#0065CA] bg-[#0065CA]/10'
                        : 'border-white/8 bg-white/2 hover:border-white/15'
                    }`}
                  >
                    <input
                      type="radio"
                      name="service"
                      checked={formData.serviceId === s.id}
                      onChange={() => updateRoot('serviceId', s.id)}
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all ${
                      formData.serviceId === s.id ? 'border-[#0065CA] bg-[#0065CA]' : 'border-gray-600'
                    }`}>
                      {formData.serviceId === s.id && <div className="w-2 h-2 rounded-full bg-white" />}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-white text-sm">{locale === 'fr' ? s.nameFr : s.nameEn}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{locale === 'fr' ? s.descFr : s.descEn}</p>
                    </div>
                    <div className="text-xs text-gray-600 flex items-center gap-1 flex-shrink-0">
                      <Clock className="w-3 h-3" />
                      {s.slotDuration * 2}h
                    </div>
                  </label>
                ))
              )}
            </div>
            <div>
              <label className="form-label">{fr ? 'Description (optionnel)' : 'Description (optional)'}</label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => updateRoot('notes', e.target.value)}
                className="form-input resize-none"
                placeholder={fr ? 'Décrivez votre problème...' : 'Describe your issue...'}
              />
            </div>
          </div>
        )}

        {/* ===== STEP 3: SLOT ===== */}
        {step === 3 && (
          <div className="space-y-5">
            <div>
              <label className="form-label">{fr ? 'Sélectionnez une date' : 'Select a date'}</label>
              <input
                type="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={(e) => updateRoot('date', e.target.value)}
                className="form-input"
              />
            </div>
            {formData.date && (
              <div>
                <label className="form-label">{fr ? 'Créneaux disponibles' : 'Available slots'}</label>
                {slots.length === 0 ? (
                  <div className="text-center py-6 text-gray-500 text-sm">
                    {fr ? 'Chargement...' : 'Loading...'}
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {slots.map((slot) => (
                      <button
                        key={slot.time}
                        type="button"
                        disabled={!slot.available}
                        onClick={() => updateRoot('time', slot.time)}
                        className={`p-3 rounded-xl text-sm font-bold border-2 transition-all ${
                          !slot.available
                            ? 'border-white/5 text-gray-700 cursor-not-allowed bg-white/2'
                            : formData.time === slot.time
                              ? 'border-[#0065CA] bg-[#0065CA] text-white shadow-lg shadow-[#0065CA]/30'
                              : 'border-white/10 text-gray-400 hover:border-[#0065CA]/50 hover:text-white'
                        }`}
                      >
                        {slot.time}
                        {!slot.available && (
                          <div className="text-[10px] font-normal text-gray-700 mt-0.5">
                            {fr ? 'Complet' : 'Full'}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-4 mt-4 text-xs text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded border-2 border-[#0065CA] bg-[#0065CA]" />
                    {fr ? 'Sélectionné' : 'Selected'}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded border border-white/10" />
                    {fr ? 'Disponible' : 'Available'}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded border border-white/5 bg-white/2" />
                    {fr ? 'Complet' : 'Full'}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ===== STEP 4: ACCOUNT ===== */}
        {step === 4 && (
          <div className="space-y-5">
            {session ? (
              <div className="flex items-center gap-4 p-4 bg-[#0065CA]/10 border border-[#0065CA]/20 rounded-xl">
                <div className="w-10 h-10 rounded-full bg-[#0065CA] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {session.user?.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{session.user?.name}</p>
                  <p className="text-gray-400 text-xs">{session.user?.email}</p>
                </div>
                <div className="ml-auto badge-green badge text-xs">
                  {fr ? 'Connecté' : 'Connected'}
                </div>
              </div>
            ) : (
              <>
                <div className="p-4 bg-[#F97316]/10 border border-[#F97316]/20 rounded-xl text-sm text-gray-400">
                  {fr
                    ? "Créez un compte pour gérer vos réservations depuis votre espace client."
                    : "Create an account to manage your bookings from your client space."}
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">{fr ? 'Prénom' : 'First name'} *</label>
                    <input type="text" value={formData.user.firstName} onChange={(e) => updateUser('firstName', e.target.value)} className="form-input" />
                  </div>
                  <div>
                    <label className="form-label">{fr ? 'Nom' : 'Last name'} *</label>
                    <input type="text" value={formData.user.lastName} onChange={(e) => updateUser('lastName', e.target.value)} className="form-input" />
                  </div>
                </div>
                <div>
                  <label className="form-label">Email *</label>
                  <input type="email" value={formData.user.email} onChange={(e) => updateUser('email', e.target.value)} className="form-input" placeholder="votre@email.com" />
                </div>
                <div>
                  <label className="form-label">{fr ? 'Téléphone' : 'Phone'}</label>
                  <input type="tel" value={formData.user.phone} onChange={(e) => updateUser('phone', e.target.value)} className="form-input" placeholder="+237 6XX XXX XXX" />
                </div>
                <div>
                  <label className="form-label">{fr ? 'Mot de passe' : 'Password'} *</label>
                  <input type="password" value={formData.user.password} onChange={(e) => updateUser('password', e.target.value)} className="form-input" placeholder="8 caractères minimum" />
                </div>
              </>
            )}
          </div>
        )}

        {/* ===== STEP 5: SUMMARY ===== */}
        {step === 5 && (
          <div className="space-y-4">
            {[
              {
                label: fr ? 'Véhicule' : 'Vehicle',
                value: `${formData.vehicle.brand} ${formData.vehicle.model}${formData.vehicle.year ? ` (${formData.vehicle.year})` : ''}${formData.vehicle.licensePlate ? ` — ${formData.vehicle.licensePlate}` : ''}`,
              },
              {
                label: fr ? 'Service' : 'Service',
                value: services.find((s) => s.id === formData.serviceId)?.[locale === 'fr' ? 'nameFr' : 'nameEn'] || '—',
              },
              {
                label: fr ? 'Date & heure' : 'Date & time',
                value: `${formData.date} — ${formData.time}`,
                highlight: true,
              },
              {
                label: fr ? 'Contact' : 'Contact',
                value: session
                  ? session.user?.name || session.user?.email || '—'
                  : `${formData.user.firstName} ${formData.user.lastName} — ${formData.user.email}`,
              },
            ].map(({ label, value, highlight }) => (
              <div key={label} className="flex items-start gap-3 p-4 rounded-xl bg-white/3 border border-white/6">
                <div className="text-xs text-gray-500 uppercase tracking-wide w-24 flex-shrink-0 mt-0.5">{label}</div>
                <div className={`text-sm font-semibold flex-1 ${highlight ? 'text-[#0065CA]' : 'text-white'}`}>{value}</div>
              </div>
            ))}
            <label className="flex items-start gap-3 cursor-pointer mt-2">
              <div
                onClick={() => updateRoot('acceptCgu', !formData.acceptCgu)}
                className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-all cursor-pointer ${
                  formData.acceptCgu ? 'bg-[#0065CA] border-[#0065CA]' : 'border-gray-600'
                }`}
              >
                {formData.acceptCgu && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              </div>
              <span className="text-gray-400 text-sm">
                {fr ? "J'accepte les conditions générales d'utilisation." : 'I accept the terms and conditions.'}
              </span>
            </label>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/5">
          <button
            onClick={prevStep}
            disabled={step === 1 || loading}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm font-medium text-gray-400 hover:text-white hover:border-white/20 transition-all ${
              step === 1 ? 'opacity-0 pointer-events-none' : ''
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            {fr ? 'Retour' : 'Back'}
          </button>

          <button
            onClick={nextStep}
            disabled={loading || (step === 5 && !formData.acceptCgu)}
            className="btn-accent flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                {fr ? 'Traitement...' : 'Processing...'}
              </>
            ) : step === 5 ? (
              <>
                <CalendarCheck className="w-4 h-4" />
                {fr ? 'Confirmer' : 'Confirm'}
              </>
            ) : (
              <>
                {fr ? 'Suivant' : 'Next'}
                <ChevronRight className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
