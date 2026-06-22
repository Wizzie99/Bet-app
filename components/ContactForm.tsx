'use client';

import { useState, FormEvent } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';

const SERVICES = [
  'Executive Travel',
  'Airport Transfer',
  'Prom Night',
  'Wedding',
  'Corporate Event',
  'City Tour',
];

const inputClass =
  "w-full bg-[#131618] border border-[#515c65]/60 rounded-[6px] px-3 py-[10px] font-['Geist',sans-serif] text-[16px] tracking-[-0.48px] leading-[24px] text-[#eff0eb] placeholder:text-[#595a59] outline-none focus:border-[#1c60ff] transition-colors";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [services, setServices] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const toggleService = (s: string) =>
    setServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );

  const handleChange =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.firstName || !form.lastName || !form.email || !form.phone) {
      setError('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!agreed) {
      setError('Please agree to the Terms & Privacy Policy.');
      return;
    }

    setLoading(true);
    try {
      // Replace with your real endpoint:
      // await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ ...form, services }),
      // });
      await new Promise((r) => setTimeout(r, 1000));
      setSubmitted(true);
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      setServices([]);
      setAgreed(false);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#131618] w-full flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-[1440px] bg-[#0c0d0f] rounded-[24px] shadow-[0px_40px_80px_0px_rgba(67,67,66,0.16),0px_2px_4px_0px_rgba(67,67,66,0.04)] overflow-hidden flex flex-col lg:flex-row gap-4">

        {/* Form column */}
        <div className="flex-1 flex justify-center p-6 md:p-10">
          <form onSubmit={handleSubmit} className="w-full max-w-[340px] flex flex-col gap-8">

            {/* Header + fields */}
            <div className="flex flex-col gap-6">
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 500,
                  fontSize: 32,
                  lineHeight: '40px',
                  letterSpacing: '-0.96px',
                  color: '#eff0eb',
                }}
              >
                Get in touch
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    className={inputClass}
                    placeholder="Name*"
                    value={form.firstName}
                    onChange={handleChange('firstName')}
                  />
                  <input
                    className={inputClass}
                    placeholder="Last Name*"
                    value={form.lastName}
                    onChange={handleChange('lastName')}
                  />
                </div>
                <input
                  type="email"
                  className={inputClass}
                  placeholder="Email*"
                  value={form.email}
                  onChange={handleChange('email')}
                />
                <input
                  type="tel"
                  className={inputClass}
                  placeholder="Phone Number*"
                  value={form.phone}
                  onChange={handleChange('phone')}
                />
              </div>
            </div>

            {/* Service chips */}
            <div className="flex flex-col gap-3">
              <p
                style={{
                  fontFamily: "'Geist', sans-serif",
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: '24px',
                  letterSpacing: '-0.48px',
                  color: '#dee4eb',
                }}
              >
                What services are you interested in?
              </p>
              <div className="flex flex-wrap gap-2 opacity-90">
                {SERVICES.map((s) => {
                  const active = services.includes(s);
                  return (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggleService(s)}
                      className={`${
                        active
                          ? 'bg-[#24282b] text-[#eff0eb]'
                          : 'bg-[#131618] text-[#8e9ca3]'
                      } border border-dashed border-[#515c65] rounded-full px-2 py-1 text-[12px] tracking-[-0.36px] leading-4 whitespace-nowrap transition-colors hover:bg-[#24282b] hover:text-[#eff0eb]`}
                      style={{ fontFamily: "'Geist', sans-serif" }}
                    >
                      {s}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Message */}
            <textarea
              className={`${inputClass} h-[99px] resize-none`}
              placeholder="Tell us more about your needs"
              value={form.message}
              onChange={handleChange('message')}
            />

            {/* Checkbox + submit */}
            <div className="flex flex-col gap-4">
              <label className="flex gap-2 items-center cursor-pointer select-none">
                <span
                  onClick={() => setAgreed((v) => !v)}
                  className={`size-3 rounded-[2px] border border-[#515c65] flex items-center justify-center shrink-0 ${
                    agreed ? 'bg-[#1c60ff]' : 'bg-[#24282b]'
                  }`}
                >
                  {agreed && <Check className="size-2.5 text-white" strokeWidth={3} />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                />
                <span
                  style={{
                    fontFamily: "'Geist', sans-serif",
                    fontWeight: 400,
                    fontSize: 12,
                    lineHeight: '16px',
                    letterSpacing: '-0.36px',
                    color: '#898987',
                  }}
                >
                  I Agree To The Terms & Privacy Policy
                </span>
              </label>

              {error && (
                <p className="text-red-400 text-[12px] tracking-[-0.36px]" style={{ fontFamily: "'Geist', sans-serif" }}>
                  {error}
                </p>
              )}
              {submitted && (
                <p className="text-green-400 text-[12px] tracking-[-0.36px]" style={{ fontFamily: "'Geist', sans-serif" }}>
                  Thanks! We&apos;ll be in touch shortly.
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="group w-full bg-[#1c60ff] hover:bg-[#1750d6] active:bg-[#0f3fa8] disabled:opacity-60 disabled:cursor-not-allowed transition-colors rounded-[6px] px-5 py-3 flex items-center justify-center gap-1.5"
              >
                <span
                  className="flex-1 text-left uppercase"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontWeight: 500,
                    fontSize: 16,
                    lineHeight: '20px',
                    letterSpacing: '-0.48px',
                    color: '#0c0d0f',
                  }}
                >
                  {loading ? 'Sending…' : 'Contact'}
                </span>
                <span className="bg-[#001a47] group-hover:bg-[#000d24] transition-colors rounded-[4px] size-[31px] flex items-center justify-center shrink-0">
                  <ArrowUpRight className="size-5 text-[#dee4eb] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>

          </form>
        </div>

        {/* Image column */}
        <div className="hidden lg:block flex-1 relative min-h-[743px]">
          <Image
            src="/Images/hero1.jpg"
            alt="Luxury vehicle"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(19,22,24,0)] to-[rgba(3,4,4,0.45)]" />
        </div>

      </div>
    </div>
  );
}
