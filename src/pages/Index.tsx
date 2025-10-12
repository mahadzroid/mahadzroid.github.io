import { Button } from "@/components/ui/button.tsx";
import { Card, CardContent } from "@/components/ui/card.tsx";
import {
  Mountain,
  Waves,
  Plane,
  Fish,
  Compass,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Smartphone,
  Globe,
  Calendar,
  Sparkles,
  Palette,
  MessageCircle,
  CheckCircle,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2C1810]/95 backdrop-blur-sm border-b border-[#8B6F47]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-3">
              <img src="/logo.svg" alt="HOZA Tanzania Safaris" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-[#D4915D]">HOZA</h1>
                <p className="text-xs text-[#8B6F47]">TANZANIA SAFARIS</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#experiences" className="text-[#D4915D] hover:text-[#F5B461] transition">
                Experiences
              </a>
              <a href="#adventures" className="text-[#D4915D] hover:text-[#F5B461] transition">
                Adventures
              </a>
              <a href="#zanzibar" className="text-[#D4915D] hover:text-[#F5B461] transition">
                Zanzibar
              </a>
              <a href="#about" className="text-[#D4915D] hover:text-[#F5B461] transition">
                About Us
              </a>
              <Button className="bg-[#D4915D] hover:bg-[#F5B461] text-white">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1602685235731-f597ed891d2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-balance">
            Experience the Wild Heart of Tanzania
          </h1>
          <p className="text-xl md:text-2xl text-[#F5B461] mb-8 text-balance">
            Unforgettable Safari Adventures in East Africa's Most Spectacular Landscapes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#D4915D] hover:bg-[#F5B461] text-white text-lg px-8">
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="border-2 border-[#D4915D] text-white bg-transparent hover:bg-[#D4915D]/20 text-lg px-8"
            >
              View Packages
            </Button>
          </div>
        </div>
      </section>

      {/* Wildlife Experiences Section */}
      <section id="experiences" className="py-20 bg-[#FDF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Wildlife Safari Experiences
            </h2>
            <p className="text-xl text-[#5C4033] max-w-3xl mx-auto">
              Witness the majestic Big Five and the greatest wildlife spectacle on Earth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* The Great Migration */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-[#D4915D]">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1564101160531-4838e8a5f4e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Great Migration"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  The Great Migration
                </h3>
              </div>
              <CardContent className="p-6 bg-white">
                <p className="text-[#5C4033]">
                  Witness millions of wildebeest, zebras, and gazelles on their annual journey across the
                  Serengeti plains in one of nature's most spectacular events.
                </p>
              </CardContent>
            </Card>

            {/* Big Five Safari */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-[#D4915D]">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1695304693615-1b93195c57ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Elephants"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  Big Five Safari
                </h3>
              </div>
              <CardContent className="p-6 bg-white">
                <p className="text-[#5C4033]">
                  Encounter lions, elephants, leopards, rhinos, and buffalo in their natural habitat across
                  Tanzania's renowned national parks and game reserves.
                </p>
              </CardContent>
            </Card>

            {/* Hot Air Balloon */}
            <Card className="overflow-hidden hover:shadow-2xl transition-shadow duration-300 border-[#D4915D]">
              <div className="relative h-64">
                <img
                  src="https://images.unsplash.com/photo-1678461048112-2bb5298f7187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Hot Air Balloon"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
                  Hot Air Balloon Safari
                </h3>
              </div>
              <CardContent className="p-6 bg-white">
                <p className="text-[#5C4033]">
                  Soar above the savanna at sunrise and experience breathtaking aerial views of wildlife and
                  endless plains in a magical floating adventure.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Wildlife Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative h-48 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1602685235560-8223e9673028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Lion"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <span className="text-white font-bold text-xl">LIONS</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1689479665413-e954e8a36240?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Elephant"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <span className="text-white font-bold text-xl">ELEPHANTS</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1650058493806-1653148b8518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Cheetah"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <span className="text-white font-bold text-xl">CHEETAHS</span>
              </div>
            </div>
            <div className="relative h-48 rounded-lg overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1615926380022-e4d545fd053c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                alt="Wildlife"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                <span className="text-white font-bold text-xl">RHINOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seasons & Animal Tracking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Calendar className="w-16 h-16 text-[#D4915D] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Best Seasons & Animal Sightings
            </h2>
            <p className="text-xl text-[#5C4033] max-w-3xl mx-auto">
              Plan your perfect safari adventure with our seasonal wildlife tracking guide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Dry Season */}
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#F5B461] mr-3" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Dry Season (June - October)</h3>
                </div>
                <p className="text-[#5C4033] mb-6">
                  The best time for wildlife viewing. Animals gather around water sources, making them easier to spot.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Peak Great Migration river crossings</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Excellent Big Five sightings</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Clear skies and comfortable temperatures</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Wet Season */}
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-8 h-8 text-[#4A9FB8] mr-3" />
                  <h3 className="text-2xl font-bold text-[#2C1810]">Green Season (November - May)</h3>
                </div>
                <p className="text-[#5C4033] mb-6">
                  Lush landscapes and newborn animals. Perfect for photographers and fewer crowds.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Calving season with baby animals</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Vibrant green scenery and wildflowers</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#D4915D] mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-[#5C4033]">Excellent bird watching opportunities</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Animal Ranking */}
          <div className="bg-[#FDF6E9] rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-[#2C1810] mb-8 text-center">
              Wildlife Sighting Probability
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { animal: "Elephants", probability: "95%" },
                { animal: "Lions", probability: "85%" },
                { animal: "Zebras", probability: "98%" },
                { animal: "Cheetahs", probability: "70%" },
                { animal: "Leopards", probability: "60%" },
              ].map((item) => (
                <div key={item.animal} className="text-center">
                  <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                    <div className="text-4xl font-bold text-[#D4915D] mb-2">{item.probability}</div>
                    <div className="text-lg font-semibold text-[#2C1810]">{item.animal}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Adventures Section */}
      <section id="adventures" className="py-20 bg-[#2C1810] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Mountain & Adventure Experiences
            </h2>
            <p className="text-xl text-[#D4915D] max-w-3xl mx-auto">
              Challenge yourself with thrilling adventures in Africa's highest peaks and pristine waters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mountain Climbing */}
            <Card className="overflow-hidden bg-[#1A0F0A] border-[#D4915D] hover:border-[#F5B461] transition-colors">
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1621414050946-1b936a78491f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Mount Kilimanjaro"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Mountain className="w-6 h-6 text-[#D4915D] mr-2" />
                  <h3 className="text-2xl font-bold text-white">Mountain Climbing</h3>
                </div>
                <p className="text-gray-300">
                  Conquer Mount Kilimanjaro, Africa's highest peak at 5,895m. Experience diverse climatic zones
                  from tropical rainforest to arctic summit.
                </p>
              </CardContent>
            </Card>

            {/* Hiking */}
            <Card className="overflow-hidden bg-[#1A0F0A] border-[#D4915D] hover:border-[#F5B461] transition-colors">
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1569832856136-5f42d6a3ed67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Hiking"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Compass className="w-6 h-6 text-[#D4915D] mr-2" />
                  <h3 className="text-2xl font-bold text-white">Hiking Expeditions</h3>
                </div>
                <p className="text-gray-300">
                  Trek through stunning landscapes, crater highlands, and mountain trails. Explore hidden valleys
                  and encounter unique flora and fauna.
                </p>
              </CardContent>
            </Card>

            {/* Fishing */}
            <Card className="overflow-hidden bg-[#1A0F0A] border-[#D4915D] hover:border-[#F5B461] transition-colors">
              <div className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1558860377-90500f1fee4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Fishing"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Fish className="w-6 h-6 text-[#D4915D] mr-2" />
                  <h3 className="text-2xl font-bold text-white">Deep Sea Fishing</h3>
                </div>
                <p className="text-gray-300">
                  Experience world-class fishing in the Indian Ocean. Catch marlin, sailfish, tuna, and more in
                  crystal-clear tropical waters.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Zanzibar Section */}
      <section id="zanzibar" className="py-20 bg-gradient-to-b from-[#E8F4F8] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Zanzibar Beach Paradise
            </h2>
            <p className="text-xl text-[#5C4033] max-w-3xl mx-auto">
              Relax on pristine white-sand beaches and dive into crystal-clear turquoise waters
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1536709194242-960fecf7712f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200"
                alt="Zanzibar Beach"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="grid grid-cols-2 gap-6 mt-6">
                <img
                  src="https://images.unsplash.com/photo-1659559108285-fb280f0e790d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Luxury Beach Resort Zanzibar"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1574780609619-393fb8edffd6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=600"
                  alt="Zanzibar Island Paradise"
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Waves className="w-8 h-8 text-[#4A9FB8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Water Sports Paradise</h3>
                  <p className="text-[#5C4033]">
                    Experience thrilling jet ski rides, surfing on pristine waves, snorkeling in coral reefs, and
                    diving to explore vibrant underwater worlds teeming with marine life.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Plane className="w-8 h-8 text-[#4A9FB8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Island Adventures</h3>
                  <p className="text-[#5C4033]">
                    Explore Stone Town's historic streets, visit spice plantations, sail on traditional dhows, and
                    discover secluded beaches on nearby islands.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Compass className="w-8 h-8 text-[#4A9FB8] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-[#2C1810] mb-2">Cultural Experiences</h3>
                  <p className="text-[#5C4033]">
                    Immerse yourself in Zanzibar's rich Swahili culture, savor exotic cuisine, and witness stunning
                    sunsets over the Indian Ocean.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Water Activities Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1710630917683-2da30ea1ff47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Surfing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A9FB8]/80 to-transparent flex items-end">
                <h4 className="text-white font-bold text-2xl p-6">Surfing</h4>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1540202404-b37a2124ed0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Jet Ski"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A9FB8]/80 to-transparent flex items-end">
                <h4 className="text-white font-bold text-2xl p-6">Jet Ski</h4>
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1723444059790-ac32735aa6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                alt="Beach Paradise"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A9FB8]/80 to-transparent flex items-end">
                <h4 className="text-white font-bold text-2xl p-6">Beach Relaxation</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tanzanian Arts & Crafts Section */}
      <section className="py-20 bg-[#FDF6E9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Palette className="w-16 h-16 text-[#D4915D] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Tanzanian Arts & Crafts
            </h2>
            <p className="text-xl text-[#5C4033] max-w-3xl mx-auto">
              Discover authentic Maasai and Tanzanian handcrafted treasures to take home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1566636741346-7bc0510fdaa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Maasai Beadwork"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Maasai Beadwork</h3>
                <p className="text-[#5C4033]">
                  Exquisite handmade jewelry and ornaments crafted by Maasai artisans using traditional
                  techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1561190717-706e279f40a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="Tingatinga Paintings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Tingatinga Paintings</h3>
                <p className="text-[#5C4033]">
                  Vibrant and colorful paintings depicting African wildlife and village life, created in the
                  distinctive Tingatinga style unique to Tanzania.
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow overflow-hidden">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1720945489924-19b707539b3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                  alt="African Wood Carvings"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-[#2C1810] mb-3">Wood Carvings</h3>
                <p className="text-[#5C4033]">
                  Intricately carved wooden sculptures of wildlife, tribal masks, and traditional Makonde art
                  pieces from skilled local craftsmen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <CreditCard className="w-16 h-16 text-[#D4915D] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-4">
              Easy & Secure Payment Methods
            </h2>
            <p className="text-xl text-[#5C4033] max-w-3xl mx-auto">
              We accept multiple payment options for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Tigo Pesa */}
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#FDF6E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Smartphone className="w-10 h-10 text-[#D4915D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Tigo Pesa</h3>
                <p className="text-[#5C4033] mb-6">
                  Pay easily with Tigo Pesa mobile money. Fast, secure, and convenient for local payments.
                </p>
                <div className="bg-[#FDF6E9] rounded-lg p-4">
                  <p className="text-sm font-semibold text-[#5C4033]">Send to:</p>
                  <p className="text-lg font-bold text-[#D4915D]">+255 123 456 789</p>
                </div>
              </CardContent>
            </Card>

            {/* Online Payment */}
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#FDF6E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-10 h-10 text-[#D4915D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Online Payment</h3>
                <p className="text-[#5C4033] mb-6">
                  Secure online payments with credit/debit cards. We accept Visa, Mastercard, and American Express.
                </p>
                <Button className="bg-[#D4915D] hover:bg-[#F5B461] text-white w-full">
                  Pay Online
                </Button>
              </CardContent>
            </Card>

            {/* Bank Transfer */}
            <Card className="border-[#D4915D] hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="bg-[#FDF6E9] rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Globe className="w-10 h-10 text-[#D4915D]" />
                </div>
                <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Bank Transfer</h3>
                <p className="text-[#5C4033] mb-6">
                  International wire transfers accepted. Contact us for bank details and currency exchange information.
                </p>
                <Button variant="secondary" className="w-full border-2 border-[#D4915D]">
                  Get Details
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-[#FDF6E9] rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-[#2C1810] mb-4">Flexible Payment Plans</h3>
            <p className="text-lg text-[#5C4033] max-w-3xl mx-auto">
              We offer flexible payment options including deposits and installment plans. Contact us to discuss a
              payment schedule that works for you!
            </p>
          </div>
        </div>
      </section>

      {/* AI Chat Support Section */}
      <section className="py-20 bg-gradient-to-br from-[#2C1810] to-[#1A0F0A] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <MessageCircle className="w-16 h-16 text-[#D4915D] mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              24/7 AI Safari Assistant
            </h2>
            <p className="text-xl text-[#D4915D]">
              Get instant answers to your safari questions anytime
            </p>
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-[#D4915D]">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#D4915D] rounded-full p-3 flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">Ask Me Anything</h3>
                    <p className="text-gray-300 mb-4">
                      Our AI assistant can help you with safari packages, availability, wildlife information,
                      best travel times, and more!
                    </p>
                    <div className="bg-white/10 rounded-lg p-4 mb-4">
                      <input
                        type="text"
                        placeholder="Ask about safari packages, wildlife, seasons..."
                        className="w-full bg-transparent border-none outline-none text-white placeholder-gray-400"
                      />
                    </div>
                    <Button className="bg-[#D4915D] hover:bg-[#F5B461] text-white w-full">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Start Conversation
                    </Button>
                  </div>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Popular Questions:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "What's included in safari packages?",
                      "Best time to see the migration?",
                      "How to prepare for Kilimanjaro?",
                      "Zanzibar accommodation options?",
                    ].map((question) => (
                      <button
                        key={question}
                        className="bg-white/10 hover:bg-white/20 rounded-lg p-3 text-left text-sm text-gray-300 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#FDF6E9]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">About HOZA Tanzania Safaris</h2>
            <div className="w-24 h-1 bg-[#D4915D] mx-auto mb-8" />
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-[#5C4033] leading-relaxed mb-6">
              HOZA Tanzania Safaris is your premier gateway to experiencing the authentic beauty and wonder of
              East Africa. With over a decade of expertise in crafting unforgettable safari adventures, we pride
              ourselves on delivering exceptional wildlife experiences that connect you with nature's most
              magnificent spectacles.
            </p>
            <p className="text-lg text-[#5C4033] leading-relaxed mb-6">
              Our passionate team of expert guides and wildlife enthusiasts are dedicated to creating personalized
              journeys that go beyond ordinary tourism. From witnessing the Great Migration in the Serengeti to
              summiting Mount Kilimanjaro, from exploring the spice islands of Zanzibar to encountering the Big
              Five in their natural habitat – we transform your African dreams into reality.
            </p>
            <p className="text-lg text-[#5C4033] leading-relaxed mb-6">
              We are committed to sustainable tourism practices that preserve Tanzania's precious ecosystems while
              supporting local communities. When you travel with HOZA Tanzania Safaris, you're not just a tourist
              – you become part of our conservation mission and cultural exchange that benefits both visitors and
              local populations.
            </p>
            <p className="text-lg text-[#5C4033] leading-relaxed">
              Let us be your trusted companion on an extraordinary journey through Tanzania's breathtaking
              landscapes, where every moment becomes a cherished memory and every experience tells a story of
              Africa's timeless magic.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C1810] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <img src="/logo.svg" alt="HOZA Tanzania Safaris" className="h-12 w-auto" />
                <div>
                  <h3 className="text-xl font-bold text-[#D4915D]">HOZA</h3>
                  <p className="text-xs text-[#8B6F47]">TANZANIA SAFARIS</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your premier safari company for unforgettable African adventures.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-xl font-bold text-[#D4915D] mb-6">Contact Us</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-[#D4915D]" />
                  <span className="text-gray-300">Arusha, Tanzania</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#D4915D]" />
                  <span className="text-gray-300">0789548857</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#D4915D]" />
                  <span className="text-gray-300">info@hozatanzaniasafaris.com</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-xl font-bold text-[#D4915D] mb-6">Follow Us</h4>
              <p className="text-gray-300 mb-6">Stay connected for updates and inspiration</p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1A0F0A] hover:bg-[#D4915D] rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1A0F0A] hover:bg-[#D4915D] rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1A0F0A] hover:bg-[#D4915D] rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8B6F47]/20 pt-8 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} HOZA Tanzania Safaris. All rights reserved. | Crafted with passion for
              adventure
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}