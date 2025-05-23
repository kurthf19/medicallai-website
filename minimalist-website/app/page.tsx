"use client"

import { useEffect } from "react"
import {
  Phone,
  Clock,
  DollarSign,
  Zap,
  BarChart3,
  MessageCircle,
  Volume2,
  Globe,
  HeartPulse,
  Stethoscope,
  Building,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  // Tally form script'ini yükle
  useEffect(() => {
    // Tally script'ini yükle
    const tallySrc = "https://tally.so/widgets/embed.js"
    const existingScript = document.querySelector(`script[src="${tallySrc}"]`)

    if (!existingScript) {
      const script = document.createElement("script")
      script.src = tallySrc
      script.async = true
      script.onload = () => {
        // Script yüklendikten sonra formları yükle
        if (typeof window.Tally !== "undefined") {
          window.Tally.loadEmbeds()
        } else {
          // Tally objesi yoksa iframe'leri manuel olarak yükle
          document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
            iframe.src = iframe.dataset.tallySrc
          })
        }
      }
      document.body.appendChild(script)
    } else {
      // Script zaten yüklüyse formları yükle
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds()
      } else {
        // Tally objesi yoksa iframe'leri manuel olarak yükle
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((iframe) => {
          iframe.src = iframe.dataset.tallySrc
        })
      }
    }

    // Component unmount olduğunda cleanup
    return () => {
      if (!existingScript) {
        const addedScript = document.querySelector(`script[src="${tallySrc}"]`)
        if (addedScript) {
          document.body.removeChild(addedScript)
        }
      }
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container flex items-center justify-between h-20 px-6 mx-auto max-w-6xl">
          <div className="flex items-center">
            <img src="/medicallai-logo-full.png" alt="MediCallAi Logo" className="h-12 w-auto" />
          </div>
          <div className="flex items-center space-x-6">
            <a href="#features" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">
              Özellikler
            </a>
            <a href="#benefits" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">
              Faydalar
            </a>
            <a href="#testimonials" className="text-blue-700 hover:text-blue-500 transition-colors duration-200">
              Referanslar
            </a>
            <Button
              className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg text-white px-6"
              onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
            >
              Demo Talep Et
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-800 leading-tight">
                Sağlık Turizmi İçin <span className="text-teal-600">Sesli Yapay Zeka</span> Çözümü
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Kliniğinizin uluslararası hastalarla 7/24 iletişimde kalmasını sağlayan yapay zeka asistanı. Çağrıları
                yanıtsız bırakmayın, hasta kaybetmeyin.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 transition-all duration-200 shadow-md hover:shadow-lg text-white px-8 py-6 text-lg"
                  onClick={() => document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Demo Talep Et
                </Button>
                <a
                  href="tel:+908503468229"
                  className="flex items-center justify-center px-8 py-6 border-2 border-blue-600 text-blue-700 rounded-md hover:bg-blue-50 transition-colors duration-200 font-medium"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  +90 850 346 82 29
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <img
                  src="/hero-doctor-global.png"
                  alt="Uluslararası hasta iletişimi sağlayan yapay zeka asistanı"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section id="problems" className="py-20 bg-white">
        <div className="container px-6 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-800 text-left">Kliniğinizin Karşılaştığı Zorluklar</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Sağlık turizmi ve klinik işletmelerinin karşılaştığı en büyük iletişim sorunları, hasta kaybına ve gelir
            düşüşüne neden oluyor.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-red-400">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-red-50 rounded-full">
                  <Globe className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Dil Bariyeri</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uluslararası hastalar farklı dillerde iletişim kurmak istiyor, ancak çok dilli personel bulmak zor
                    ve maliyetli. Potansiyel hastaların <span className="font-semibold">%42'si</span> dil engeli
                    nedeniyle başka kliniklere yöneliyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-red-400">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-red-50 rounded-full">
                  <Clock className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Saat Dilimi Farkı</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uluslararası hastalar farklı saat dilimlerinden arıyor, mesai saatleri dışında gelen çağrılar
                    yanıtsız kalıyor. İlk aramada yanıt alamayan hastaların <span className="font-semibold">%68'i</span>{" "}
                    bir daha aramıyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-red-400">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-red-50 rounded-full">
                  <DollarSign className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Yüksek Personel Maliyeti</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Çok dilli çağrı merkezi personeli aylık <span className="font-semibold">35.000₺+</span> maliyet
                    oluşturuyor. Uluslararası hasta koordinatörleri için eğitim ve işe alım süreçleri zaman ve kaynak
                    gerektiriyor.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-red-400">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-red-50 rounded-full">
                  <HeartPulse className="w-7 h-7 text-red-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Hasta Deneyimi</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Uluslararası hastalar hızlı yanıt ve kişiselleştirilmiş bilgi bekliyor. İlk 5 dakika içinde dönüş
                    alamayan potansiyel hastaların <span className="font-semibold">%78'i</span> rakip kliniklere
                    yöneliyor.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section id="features" className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-6 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-[#0a6e8a] text-left">Neden MediCallAi?</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            Sağlık turizmi ve klinik işletmeleri için özel olarak geliştirilmiş yapay zeka çözümümüz, uluslararası hasta
            iletişiminde devrim yaratıyor.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* İnsan Gibi Konuşma */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-blue-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-blue-50 rounded-full">
                  <MessageCircle className="w-7 h-7 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Çok Dilli İletişim</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    20+ dilde doğal ve akıcı konuşma yeteneği. Hastalarınız kendi dillerinde iletişim kurabilir, robot
                    değil gerçek bir asistanla konuştuklarını hissederler.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-blue-700">
                      İnanmıyorsanız deneyin →{" "}
                      <a
                        href="tel:+908503468229"
                        className="underline hover:text-blue-500 transition-colors duration-200"
                      >
                        +90 850 346 82 29
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hız Vurgusu */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-teal-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-teal-50 rounded-full">
                  <Zap className="w-7 h-7 text-teal-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">7/24 Kesintisiz Hizmet</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Saat dilimi farkı gözetmeksizin, dünyanın her yerinden gelen çağrılara anında yanıt. "Telefon
                    başında değildik" problemine son.
                  </p>
                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-teal-700">
                      Ortalama yanıt süresi: <span className="text-xl font-semibold">2.3 saniye</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Yüksek Hacim */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-indigo-500">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-indigo-50 rounded-full">
                  <Volume2 className="w-7 h-7 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Sınırsız Kapasite</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Turizm sezonunda bile tüm çağrıları yanıtlayabilir. Normal bir çağrı merkezi ekibiyle asla
                    ulaşamayacağınız hacimdeki aramalara tek çözüm.
                  </p>
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-indigo-700">
                      Aynı anda <span className="text-xl font-semibold">1000+</span> paralel görüşme kapasitesi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Veri Analizi */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 border-l-4 border-orange-400">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-5 p-3 bg-orange-50 rounded-full">
                  <BarChart3 className="w-7 h-7 text-orange-500" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-3 text-gray-800">Hasta Analizi ve İçgörüler</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Her görüşme analiz edilir, hasta tercihleri ve tedavi talepleri hakkında değerli içgörüler sunar.
                    Pazarlama stratejinizi veriye dayalı olarak geliştirebilirsiniz.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm font-medium text-orange-700">Detaylı raporlama ve hasta davranış analizi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container px-6 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-4 text-blue-800 text-left">Kliniğinize Sağladığı Faydalar</h2>
          <p className="text-lg text-gray-600 mb-12 max-w-3xl">
            <span className="text-[#0a6e8a] font-semibold">MediCallAi</span>, sağlık turizmi ve klinik işletmelerine somut ve ölçülebilir faydalar sağlar.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 rounded-full">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-4xl font-bold text-blue-600 mb-3">20+</div>
              <p className="font-semibold text-xl mb-2 text-gray-800">Dil Desteği</p>
              <p className="text-gray-600">
                Arapça, İngilizce, Rusça, Almanca dahil 20'den fazla dilde hizmet vererek global hasta portföyünüzü
                genişletin.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-teal-100 rounded-full">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              <div className="text-4xl font-bold text-teal-600 mb-3">%70</div>
              <p className="font-semibold text-xl mb-2 text-gray-800">Maliyet Tasarrufu</p>
              <p className="text-gray-600">
                Çok dilli çağrı merkezi personeli (90.000₺+) yerine AI çözümü (27.000₺) kullanarak maliyetlerinizi
                düşürün.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-indigo-100 rounded-full">
                <Building className="w-8 h-8 text-indigo-600" />
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-3">%175</div>
              <p className="font-semibold text-xl mb-2 text-gray-800">Yanıtlama Artışı</p>
              <p className="text-gray-600">
                Kaçan çağrıları yakalayarak yanıtlama oranınızı %175 artırın ve potansiyel hastaları kaybetmeyin.
              </p>
            </div>
          </div>

          {/* ROI Example */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-800">Somut Getiri Örneği: Diş Kliniği</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">Aylık ekstra doldurulan randevu</p>
                <p className="text-3xl font-bold text-blue-600">24</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">Randevu başına ortalama gelir</p>
                <p className="text-3xl font-bold text-teal-600">1.200₺</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">Aylık ek gelir</p>
                <p className="text-3xl font-bold text-indigo-600">28.800₺</p>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-6">
                <p className="text-sm text-gray-500 mb-2">Yıllık ROI</p>
                <p className="text-3xl font-bold text-orange-500">%1280</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section id="testimonials" className="py-20 bg-gradient-to-r from-blue-50 to-teal-50">
        <div className="container px-6 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-blue-800 text-center">Müşterilerimiz Ne Diyor?</h2>

          <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Stethoscope className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-xl italic text-gray-600 mb-6 leading-relaxed">
                "<span className="text-[#0a6e8a] font-semibold">MediCallAi</span> ile uluslararası hasta iletişimimiz tamamen değişti. Artık dünyanın her yerinden, her saat
                gelen çağrıları yanıtlıyoruz. Aylık 35+ ekstra uluslararası hasta randevusu alıyoruz ve personel
                maliyetimiz %65 düştü."
              </p>
              <div>
                <p className="font-semibold text-lg text-gray-800">Dr. Mehmet Yılmaz</p>
                <p className="text-gray-500">İstanbul Diş Kliniği, Medikal Direktör</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tally Form */}
      <section id="demo-form" className="py-20 bg-gradient-to-b from-blue-600 to-teal-600">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-3 text-white">Ücretsiz Demo Talep Edin</h3>
            <p className="text-center text-blue-100 mb-10 text-lg">
              30 saniyede ajanımız sizi arasın, kliniğinize özel çözümü keşfedin
            </p>

            {/* Tally Form Embed - Doğrudan HTML olarak */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden p-10">
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                    <iframe 
                      src="https://tally.so/embed/wMGBXX?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1" 
                      width="100%" 
                      height="580" 
                      frameborder="0" 
                      marginheight="0" 
                      marginwidth="0" 
                      title="Yapay Zeka Ajanımız Sizi Hemen Arasın">
                    </iframe>
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10">
            <div>
              <div className="mb-4">
                <img
                  src="/medicallai-logo-full.png"
                  alt="MediCallAi Logo"
                  className="h-16 w-auto brightness-200 contrast-200"
                />
              </div>
              <p className="text-gray-400 mb-6">
                Sağlık turizmi ve klinik işletmeleri için yapay zeka destekli çok dilli iletişim çözümü.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 \
