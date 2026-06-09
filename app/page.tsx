import Link from 'next/link'
import {
  BookOpen, Play, ClipboardList, Trophy, Users, Star,
  ArrowRight, CheckCircle2, Zap, Shield, Globe, Hexagon
} from 'lucide-react'
import Button from '@/components/ui/Button'
import { LESSONS } from '@/lib/data'

export default function HomePage() {
  const features = [
    { icon: <Play size={20} className="text-accent-copper" />, title: 'Video darslar', desc: '11 ta professional video ma\'ruza va loyiha, jami 22+ soat kontent' },
    { icon: <BookOpen size={20} className="text-accent-copper" />, title: "Ma'ruza matnlari", desc: "Har bir mavzu bo'yicha batafsil ma'ruza matni va misollar" },
    { icon: <ClipboardList size={20} className="text-accent-copper" />, title: 'Interaktiv testlar', desc: 'Sertifikatga ega bo\'lish uchun testlar va yakuniy loyiha himoyasi' },
    { icon: <Trophy size={20} className="text-accent-copper" />, title: 'Sertifikat', desc: "Kursni muvaffaqiyatli tugatib, loyihani himoya qilgach elektron sertifikat olasiz" },
  ]

  const highlights = [
    'Raqamli iqtisodiyot va AI asoslari',
    'Blokcheyn va kriptovalyutalar',
    'Bulut hisoblash va kiberxavfsizlik',
    'Big Data va IoT texnologiyalari',
    'Web va mobil dasturlash',
    'Kvant hisoblash va metaverse',
  ]

  const stats = [
    { icon: <BookOpen size={18} />, value: '11+1', label: 'Mavzu' },
    { icon: <Play size={18} />, value: '22+', label: 'Soat video' },
    { icon: <ClipboardList size={18} />, value: '56', label: 'Test savoli' },
    { icon: <Users size={18} />, value: '∞', label: 'Mustaqil o\'rganish' },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-grid py-24 px-4 border-b border-border">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative max-w-4xl mx-auto text-center z-10">
          
          {/* Wireframe Badge */}
          <div className="mb-8 inline-flex items-center justify-center p-[1px] rounded-full bg-gradient-to-r from-accent-copper via-primary to-accent-copper opacity-90 shadow-[0_0_15px_rgba(6,95,70,0.3)]">
            <div className="px-5 py-2 rounded-full bg-[#0f172a] backdrop-blur-md flex items-center gap-2 border border-transparent">
              <Hexagon size={14} className="text-accent-copper animate-pulse-slow" />
              <span className="text-sm font-medium tracking-wider text-text-primary uppercase">
                Mustaqil ta'lim platformasi
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight mb-6">
            <span className="text-text-primary">Kelajak ta'limiga</span>
            <br />
            <span className="text-gradient drop-shadow-sm">xush kelibsiz</span>
          </h1>

          <p className="text-lg md:text-xl text-text-primary/90 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Raqamli texnologiyalar va innovatsiyalar bo'yicha zamonaviy kurs.
            Bulut hisoblash, AI, blokcheyn va boshqa muhim 11 ta mavzuni hamda yakuniy amaliy loyihani o'zlashtiring.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/course/raqamli-texnologiyalar">
              <Button size="lg" variant="primary" className="w-full sm:w-auto h-14 px-8 text-lg rounded-2xl group">
                Kursni boshlash
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto h-14 px-8 text-lg rounded-2xl">
                Ro'yxatdan o'tish
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-20">
            {stats.map((s) => (
              <div key={s.label} className="glass card-hover rounded-2xl p-6 text-center relative overflow-hidden group">
                <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                <div className="flex justify-center mb-3 text-accent-copper">{s.icon}</div>
                <p className="text-3xl font-bold font-display text-text-primary mb-1">{s.value}</p>
                <p className="text-sm text-text-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 px-4 relative">
        <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-accent-copper/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-text-primary mb-4">
              O'rganish qulay va samarali
            </h2>
            <div className="w-24 h-1 bg-accent-copper mx-auto rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="glass card-hover rounded-2xl p-8 relative overflow-hidden group">
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-primary/5 blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="w-12 h-12 rounded-xl bg-surface-3 border border-border flex items-center justify-center mb-6 shadow-inner relative z-10">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-3 font-display relative z-10">{f.title}</h3>
                <p className="text-text-muted leading-relaxed relative z-10">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics preview */}
      <section className="py-24 px-4 bg-surface-2 border-y border-border relative overflow-hidden">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold font-display text-text-primary mb-4">11 ta mavzu va Yakuniy loyiha</h2>
            <p className="text-text-muted max-w-xl mx-auto text-lg">
              Zamonaviy raqamli texnologiyalarning barcha muhim sohalarini qamrab olgan keng qamrovli kurs
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {LESSONS.map((lesson) => (
              <div key={lesson.id} className="glass-light card-hover rounded-xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-3 border border-accent-copper/30 flex items-center justify-center text-sm font-bold text-accent-copper shrink-0 shadow-inner">
                  {lesson.topicNumber}
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-text-primary truncate">{lesson.title}</p>
                  <p className="text-xs text-text-muted mt-1">{lesson.videoDuration}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/course/raqamli-texnologiyalar">
              <Button variant="secondary" size="lg" className="rounded-2xl h-14 px-8 text-lg">
                Kursni to'liq ko'rish
                <ArrowRight size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-24 px-4 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary-light text-sm font-medium mb-6">
                <Zap size={14} />
                Nima o'rganasiz?
              </div>
              <h2 className="text-4xl font-bold font-display text-text-primary mb-8 leading-tight">
                Kelajak texnologiyalariga <br/> tayyorlaning
              </h2>
              <div className="space-y-4">
                {highlights.map((h) => (
                  <div key={h} className="flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle2 size={14} className="text-primary-light" />
                    </div>
                    <span className="text-text-primary/90 text-lg">{h}</span>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <Link href="/auth/register">
                  <Button size="lg" variant="primary" className="h-14 px-8 rounded-2xl text-lg">
                    Hoziroq boshlash
                    <ArrowRight size={18} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                { icon: <Shield size={28} className="text-accent-copper" />, title: 'Kiberxavfsizlik' },
                { icon: <Globe size={28} className="text-accent-copper" />, title: 'Web texnologiyalar' },
                { icon: <Zap size={28} className="text-accent-copper" />, title: "Sun'iy intellekt" },
                { icon: <Trophy size={28} className="text-accent-copper" />, title: 'Sertifikat' },
              ].map((item) => (
                <div key={item.title} className="glass card-hover rounded-2xl p-8 flex flex-col items-center justify-center text-center">
                  <div className="mb-4 bg-surface-3 w-14 h-14 rounded-full flex items-center justify-center shadow-[inset_0_0_10px_rgba(255,255,255,0.05)] border border-border-light">{item.icon}</div>
                  <p className="text-base font-semibold text-text-primary font-display">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 bg-grid border-t border-border relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl" />
        <div className="max-w-3xl mx-auto text-center relative z-10 glass p-12 rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-display text-text-primary mb-6">
            Bugun boshlang
          </h2>
          <p className="text-xl text-text-muted mb-10 max-w-xl mx-auto">
            Bepul ro'yxatdan o'ting va raqamli texnologiyalar dunyosiga kiring
          </p>
          <Link href="/auth/register">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-lg rounded-2xl shadow-[0_0_20px_rgba(184,115,51,0.2)]">
              Bepul ro'yxatdan o'tish
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
