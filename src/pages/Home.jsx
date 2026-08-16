import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Dumbbell, 
  Scale, 
  Flame, 
  UserCheck, 
  ShieldCheck, 
  Grid, 
  Users, 
  HeartPulse, 
  Maximize2
} from 'lucide-react';
import { siteData } from '../data/siteData';
import SEOHead from '../components/SEOHead';
import HeroSportsCampaign from '../components/HeroSportsCampaign';
import SportsBreakSection from '../components/SportsBreakSection';
import CinematicHeroText from '../components/CinematicHeroText';
import FinalCTA from '../components/FinalCTA';

// Motion Components
import AnimatedHeading from '../components/motion/AnimatedHeading';
import AnimatedWordText from '../components/motion/AnimatedWordText';
import AnimatedParagraph from '../components/motion/AnimatedParagraph';
import AnimatedLabel from '../components/motion/AnimatedLabel';
import AnimatedCard, {
  AnimatedCardIcon,
  AnimatedCardTitle,
  AnimatedCardText,
  AnimatedCardDivider,
  AnimatedCardCTA
} from '../components/motion/AnimatedCard';
import AnimatedImage from '../components/motion/AnimatedImage';
import ScrollGymVisual from '../components/motion/ScrollGymVisual';

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const goalIcons = {
    Dumbbell: <Dumbbell className="w-8 h-8 text-brand-orange" />,
    Scale: <Scale className="w-8 h-8 text-brand-orange" />,
    Flame: <Flame className="w-8 h-8 text-brand-orange" />,
    UserCheck: <UserCheck className="w-8 h-8 text-brand-orange" />
  };

  const whyIcons = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-brand-orange" />,
    Grid: <Grid className="w-6 h-6 text-brand-orange" />,
    Users: <Users className="w-6 h-6 text-brand-orange" />,
    HeartPulse: <HeartPulse className="w-6 h-6 text-brand-orange" />
  };

  return (
    <div className="min-h-screen bg-brand-dark text-white overflow-hidden font-body">
      <SEOHead 
        title="Premium Gym & Fitness Center in Sargasan"
        description={siteData.brand.heroDescription}
      />

      {/* HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-16 px-6 hero-radial-bg overflow-hidden">
        {/* Background Real AKAY Gym Image Overlay */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src={siteData.heroImages[0]}
            alt="AKAY Fitness Gym Interior Sargasan"
            className="w-full h-full object-cover filter contrast-125 saturate-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        {/* Dynamic Light Streaks */}
        <div className="absolute top-1/4 left-10 w-72 h-1 bg-gradient-to-r from-transparent via-brand-orange/40 to-transparent blur-sm transform -rotate-12 animate-pulse" />
        <div className="absolute bottom-1/3 right-10 w-96 h-1 bg-gradient-to-r from-transparent via-brand-orange/30 to-transparent blur-sm transform rotate-12 animate-pulse" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 items-center gap-12 relative z-10">
          {/* Hero Left Content with Character-by-Character Cinematic Reveal */}
          <div className="lg:col-span-7">
            <CinematicHeroText />
          </div>

          {/* Hero Right Sports Technology Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <HeroSportsCampaign />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none opacity-80">
          <AnimatedLabel className="text-[10px] font-mono tracking-widest text-gray-400 uppercase">
            SCROLL TO EXPLORE
          </AnimatedLabel>
          <div className="w-0.5 h-8 bg-gradient-to-b from-brand-orange to-transparent animate-pulse" />
        </div>
      </section>

      {/* FITNESS GOALS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <ScrollGymVisual type="dumbbell" position="right" className="-top-12" />

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            TAILORED OBJECTIVES
          </AnimatedLabel>
          <h2 className="font-athletic text-5xl sm:text-6xl text-white tracking-wide block">
            <AnimatedHeading
              text="TRAIN FOR YOUR GOAL"
              highlightClass="text-orange-gradient"
              highlightWords={['YOUR', 'GOAL']}
            />
          </h2>
          <AnimatedParagraph delay={0.2} className="text-gray-400 text-base max-w-xl mx-auto">
            Every fitness journey requires a clear path. Select your focal point and let our coaches structure your path.
          </AnimatedParagraph>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {siteData.goals.map((goal, index) => (
            <AnimatedCard
              key={goal.id}
              index={index}
              direction="up"
              className="glass-card rounded-2xl p-8 flex flex-col justify-between group relative overflow-hidden border border-white/10 hover:border-brand-orange/50 transition-all duration-300 shadow-xl hover:shadow-orange-glow/20"
            >
              <div className="space-y-4">
                <AnimatedCardIcon index={index}>
                  <div className="w-16 h-16 rounded-2xl bg-brand-surface border border-white/10 flex items-center justify-center group-hover:border-brand-orange transition-colors">
                    {goalIcons[goal.icon]}
                  </div>
                </AnimatedCardIcon>

                <AnimatedLabel delay={index * 0.05} className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[10px] font-mono font-bold uppercase tracking-wider border border-brand-orange/20">
                  {goal.badge}
                </AnimatedLabel>

                <AnimatedCardTitle index={index}>
                  <h3 className="font-athletic text-2xl text-white tracking-wide group-hover:text-brand-orange transition-colors">
                    {goal.title}
                  </h3>
                </AnimatedCardTitle>

                <AnimatedCardText index={index}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {goal.description}
                  </p>
                </AnimatedCardText>
              </div>

              <div className="pt-6 mt-6 space-y-4">
                <AnimatedCardDivider index={index} />
                <AnimatedCardCTA index={index}>
                  <Link
                    to="/join-now"
                    className="text-xs font-bold text-white uppercase tracking-wider group-hover:text-brand-orange flex items-center justify-between"
                  >
                    <span>START THIS GOAL</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform text-brand-orange" />
                  </Link>
                </AnimatedCardCTA>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* WHY AKAY FITNESS */}
      <section className="py-24 px-6 bg-[#0E0E12] border-y border-white/5 relative">
        <ScrollGymVisual type="plate" position="left" className="-top-16 opacity-30" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
              THE AKAY DIFFERENCE
            </AnimatedLabel>
            <h2 className="font-athletic text-6xl sm:text-7xl lg:text-8xl tracking-wider text-white leading-none block">
              <AnimatedWordText
                text="MORE THAN A WORKOUT."
                highlightClass="text-orange-gradient"
                highlightWords={['WORKOUT.']}
              />
            </h2>
            <AnimatedParagraph delay={0.2} className="text-gray-300 text-base sm:text-lg leading-relaxed">
              We engineered AKAY Fitness to eliminate gym friction—combining luxury interior design, state-of-the-art bio-mechanical equipment, and zero-judgment community support.
            </AnimatedParagraph>
            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full border border-brand-orange text-brand-orange font-athletic text-lg uppercase tracking-wider hover:bg-brand-orange hover:text-white transition-all duration-300 shadow-orange-glow"
              >
                OUR FULL STORY <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {siteData.whyChooseUs.map((item, idx) => (
              <AnimatedCard
                key={idx}
                index={idx}
                direction={idx % 2 === 0 ? 'left' : 'right'}
                className="glass-card p-6 rounded-2xl space-y-3 hover:border-brand-orange/40 transition-all duration-300 border border-white/10"
              >
                <AnimatedCardIcon index={idx}>
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center border border-brand-orange/20">
                    {whyIcons[item.icon]}
                  </div>
                </AnimatedCardIcon>
                <AnimatedCardTitle index={idx}>
                  <h4 className="font-athletic text-2xl text-white tracking-wide">
                    {item.title}
                  </h4>
                </AnimatedCardTitle>
                <AnimatedCardText index={idx}>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </AnimatedCardText>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* SPORTS BREAK SECTION */}
      <SportsBreakSection />

      {/* PROGRAMS SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative">
        <ScrollGymVisual type="kettlebell" position="right" className="-top-12" />

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 relative z-10">
          <div>
            <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block mb-3">
              WORKOUT CATEGORIES
            </AnimatedLabel>
            <h2 className="font-athletic text-5xl sm:text-6xl text-white tracking-wide block">
              <AnimatedWordText
                text="FIND YOUR WAY TO FITNESS"
                highlightClass="text-orange-gradient"
                highlightWords={['WAY', 'TO', 'FITNESS']}
              />
            </h2>
          </div>
          <Link
            to="/programs"
            className="text-brand-orange font-athletic text-xl uppercase tracking-wider flex items-center gap-2 hover:underline"
          >
            VIEW ALL 8 PROGRAMS <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {siteData.programs.map((prog, index) => (
            <AnimatedCard
              key={prog.id}
              index={index}
              direction="up"
              className="glass-card rounded-2xl overflow-hidden group relative flex flex-col justify-between h-[380px] border border-white/10"
            >
              <div className="absolute inset-0 z-0">
                <AnimatedImage
                  src={prog.image}
                  alt={prog.title}
                  containerClassName="w-full h-full"
                  className="filter brightness-50 group-hover:scale-110 group-hover:brightness-40"
                  variant={index % 2 === 0 ? 'typeA' : 'typeB'}
                  delay={index * 0.1}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent" />
              </div>

              <div className="relative z-10 p-6 flex justify-between items-start">
                <span className="font-mono text-2xl font-black text-brand-orange">
                  0{index + 1}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-mono text-gray-200 uppercase border border-white/10">
                  {prog.level}
                </span>
              </div>

              <div className="relative z-10 p-6 space-y-2">
                <h3 className="font-athletic text-3xl text-white tracking-wide group-hover:text-brand-orange transition-colors">
                  {prog.title}
                </h3>
                <p className="text-gray-300 text-xs line-clamp-2 leading-relaxed">
                  {prog.shortDesc}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-white/10">
                  <span className="text-[11px] font-mono text-brand-orange">
                    {prog.duration}
                  </span>
                  <Link
                    to="/programs"
                    className="w-8 h-8 rounded-full bg-brand-orange text-white flex items-center justify-center group-hover:translate-x-1 transition-transform shadow-orange-glow"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* CERTIFIED TRAINERS SHOWCASE */}
      <section className="py-24 px-6 bg-[#0B0B0E] border-t border-white/5 relative">
        <ScrollGymVisual type="sculpture" position="left" className="-top-12" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
              EXPERT COACHING
            </AnimatedLabel>
            <h2 className="font-athletic text-5xl sm:text-6xl text-white tracking-wide block">
              <AnimatedHeading
                text="TRAIN WITH PURPOSE."
                highlightClass="text-orange-gradient"
                highlightWords={['PURPOSE.']}
              />
            </h2>
            <AnimatedParagraph delay={0.2} className="text-gray-400 text-base max-w-xl mx-auto">
              Our certified fitness directors provide real, scientific posture correction, programming, and motivation.
            </AnimatedParagraph>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteData.trainers.map((trainer, index) => (
              <AnimatedCard
                key={trainer.id}
                index={index}
                direction="scale"
                className="glass-card rounded-3xl overflow-hidden group border border-white/10 hover:border-brand-orange/50 transition-all duration-500"
              >
                <div className="h-[320px] relative overflow-hidden">
                  <AnimatedImage
                    src={trainer.image}
                    alt={trainer.name}
                    containerClassName="w-full h-full"
                    className="group-hover:scale-105"
                    variant="typeC"
                    delay={index * 0.12}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-brand-orange px-3 py-1 rounded-full text-[10px] font-mono uppercase font-extrabold tracking-wider text-white shadow-orange-glow">
                    {trainer.experience}
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <AnimatedCardTitle index={index}>
                    <h3 className="font-athletic text-3xl text-white tracking-wide">
                      {trainer.name}
                    </h3>
                  </AnimatedCardTitle>
                  <p className="text-brand-orange font-bold text-xs uppercase tracking-wider">
                    {trainer.role}
                  </p>
                  <AnimatedCardText index={index}>
                    <p className="text-gray-400 text-xs leading-relaxed">
                      {trainer.bio}
                    </p>
                  </AnimatedCardText>
                  <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1.5">
                    {trainer.skills.map((skill, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-gray-300 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY PREVIEW SECTION */}
      <section className="py-24 px-6 max-w-7xl mx-auto relative border-t border-white/5">
        <ScrollGymVisual type="camera" position="left" className="-top-12" />

        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative z-10">
          <AnimatedLabel className="text-brand-orange font-mono text-xs tracking-widest uppercase font-extrabold px-3 py-1 bg-brand-orange/10 rounded-full border border-brand-orange/20 inline-block">
            FACILITY PREVIEW
          </AnimatedLabel>
          <h2 className="font-athletic text-5xl sm:text-6xl text-white tracking-wide block">
            <AnimatedHeading
              text="INSIDE AKAY FITNESS"
              highlightClass="text-orange-gradient"
              highlightWords={['AKAY', 'FITNESS']}
            />
          </h2>
          <AnimatedParagraph delay={0.2} className="text-gray-400 text-base max-w-xl mx-auto">
            Explore authentic images of Sargasan's finest fitness studio.
          </AnimatedParagraph>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {siteData.gallery.map((item, index) => (
            <AnimatedCard
              key={item.id}
              index={index}
              direction="scale"
              className="glass-card rounded-2xl overflow-hidden group cursor-pointer relative h-[260px] border border-white/10"
            >
              <div className="w-full h-full" onClick={() => setSelectedImage(item)}>
                <AnimatedImage
                  src={item.image}
                  alt={item.title}
                  containerClassName="w-full h-full"
                  className="group-hover:scale-110"
                  variant={index % 2 === 0 ? 'typeA' : 'typeB'}
                  delay={index * 0.08}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <div>
                    <span className="text-[10px] font-mono text-brand-orange uppercase font-bold block">
                      {item.category}
                    </span>
                    <h4 className="font-athletic text-xl text-white tracking-wide">
                      {item.title}
                    </h4>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-brand-orange transition-colors">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setSelectedImage(null)}>
          <div className="max-w-4xl w-full bg-brand-card rounded-3xl overflow-hidden border border-white/15 p-4 animate-scale-up" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-[450px] object-cover rounded-2xl" />
            <div className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-athletic text-3xl text-white">{selectedImage.title}</h3>
                <p className="text-gray-400 text-sm">{selectedImage.caption}</p>
              </div>
              <button onClick={() => setSelectedImage(null)} className="px-6 py-2 bg-brand-orange text-white rounded-full font-athletic text-lg uppercase">
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}

      {/* REUSABLE ANIMATED FINAL CTA */}
      <FinalCTA />
    </div>
  );
}
