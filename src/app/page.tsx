"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCorners from '@/components/sections/hero/HeroBillboardCorners';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardThree from '@/components/sections/feature/featureCardThree/FeatureCardThree';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Award, DollarSign, Heart, Info, MessageCircle, ShoppingCart, Star, Stethoscope } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="small"
      sizing="small"
      background="plain"
      cardStyle="glass-flat"
      primaryButtonStyle="flat"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "About", id: "about" },
            { name: "Why Donate", id: "feature" },
            { name: "Testimonials", id: "testimonial" },
            { name: "FAQ", id: "faq" },
            { name: "Donate", id: "contact" }
          ]}
          brandName="Noya's Dog Fund"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardCorners
          title="Help Noya Get Her Dream Big Dog"
          description="I'm Noya, and I'm raising funds to adopt and care for a big dog companion. Whether it's a Border Collie, Golden Retriever, or Bernese Mountain Dog, your donation will help me provide a loving home for one of these amazing breeds."
          tag="Donation Campaign"
          tagIcon={Heart}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219104601-29rk5q70.jpg",
              imageAlt: "Border Collie"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219105338-uhmrg5jq.jpg",
              imageAlt: "Golden Retriever"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219106077-184fukjf.jpg",
              imageAlt: "Bernese Mountain Dog"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219106858-oq7uebpu.jpg",
              imageAlt: "Noya"
            }
          ]}
          buttons={[
            { text: "Donate Now", href: "contact" },
            { text: "Learn More", href: "about" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Why I Need Your Help"
          description="Getting a big dog is a wonderful dream, but it comes with significant costs. From adoption fees to initial supplies, veterinary care, and ongoing expenses, I want to ensure I can provide the best possible life for my future furry friend."
          tag="About This Campaign"
          tagIcon={Info}
          textboxLayout="default"
          imagePosition="right"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219106858-oq7uebpu.jpg"
          imageAlt="Noya with dogs"
          bulletPoints={[
            {
              title: "Adoption Fees",
              description: "Quality breeders and rescue organizations charge $500-2000 for big dog breeds",
              icon: DollarSign
            },
            {
              title: "Initial Supplies",
              description: "Large dogs need sturdy beds, crates, leashes, and toys designed for their size",
              icon: ShoppingCart
            },
            {
              title: "Veterinary Care",
              description: "First-year vet costs including vaccinations, spaying/neutering, and health checkups",
              icon: Stethoscope
            },
            {
              title: "Training Classes",
              description: "Professional training is essential for big dogs to ensure they're well-behaved companions",
              icon: Award
            }
          ]}
          buttons={[
            { text: "Support My Dream", href: "contact" }
          ]}
        />
      </div>

      <div id="feature" data-section="feature">
        <FeatureCardThree
          title="Why Big Dogs Make Amazing Companions"
          description="Large breed dogs bring unique joys and benefits that make them incredible life companions"
          tag="Benefits"
          tagIcon={Star}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          features={[
            {
              id: "01",
              title: "Loyal Companionship",
              description: "Big dogs are known for their unwavering loyalty and deep bonds with their families. They become true life partners who are always by your side.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219108944-232eu5js.jpg",
              imageAlt: "Person with big dog companionship"
            },
            {
              id: "02",
              title: "Great Exercise Partners",
              description: "Large dogs encourage an active lifestyle with hiking, running, and outdoor adventures that keep both you and your dog healthy and happy.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219109677-1clhzsxk.jpg",
              imageAlt: "Large dog running exercise"
            },
            {
              id: "03",
              title: "Intelligent & Trainable",
              description: "Breeds like Border Collies and Golden Retrievers are highly intelligent and eager to learn, making training enjoyable and rewarding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219107976-b07ww6ow.jpg",
              imageAlt: "Dog training session"
            },
            {
              id: "04",
              title: "Responsible Ownership",
              description: "Caring for a big dog teaches responsibility and provides a sense of purpose, creating a meaningful relationship built on mutual care.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219110489-bfmcn5fm.jpg",
              imageAlt: "Responsible dog ownership"
            }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Others Say About Big Dogs"
          description="Hear from people who have experienced the joy of big dog companionship"
          tag="Success Stories"
          tagIcon={MessageCircle}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Golden Retriever Owner",
              company: "Dog Lover",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219111374-zvgu9bk3.jpg",
              text: "My Golden Retriever has been the most loyal and loving companion I could ask for. The bond we share is incredible and brings so much joy to my life every day."
            },
            {
              id: "2",
              name: "Mike Chen",
              role: "Border Collie Owner",
              company: "Active Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219112107-pcahks3g.jpg",
              text: "Our Border Collie is incredibly intelligent and has become such an important part of our family. The energy and love they bring is unmatched."
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Bernese Owner",
              company: "Dog Enthusiast",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219112934-l0fmunuu.jpg",
              text: "My Bernese Mountain Dog is the gentlest giant with such a calm and loving personality. They make the perfect family companion and bring peace to our home."
            },
            {
              id: "4",
              name: "David Kim",
              role: "Large Breed Advocate",
              company: "Pet Professional",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219113681-afifjml6.jpg",
              text: "Working with large breed dogs professionally has shown me how amazing these companions can be. They form deep bonds and are incredibly rewarding to care for."
            },
            {
              id: "5",
              name: "Lisa Thompson",
              role: "First-time Big Dog Owner",
              company: "Happy Family",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219114696-r1wsnzx8.jpg",
              text: "Getting my first big dog was the best decision I ever made. They've taught me so much about responsibility and unconditional love."
            },
            {
              id: "6",
              name: "Alex Rivera",
              role: "Dog Trainer",
              company: "Professional Trainer",
              rating: 5,
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763219115393-isyo3211.jpg",
              text: "Training large breed dogs is incredibly fulfilling. Their intelligence and eagerness to please makes them wonderful companions for the right owners."
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Common questions about my dog adoption campaign"
          textPosition="left"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "Why do you need donations for a dog?",
              content: "Getting a big dog responsibly involves significant upfront costs including adoption fees ($500-2000), initial supplies ($300-800), veterinary care ($500-1000), and training ($200-500). I want to ensure I can provide the best possible start for my future companion."
            },
            {
              id: "2",
              title: "Which breed are you planning to get?",
              content: "I'm considering three amazing big dog breeds: Border Collie (highly intelligent and active), Golden Retriever (gentle and family-friendly), or Bernese Mountain Dog (calm and affectionate). The final choice will depend on which dog I connect with and what's available for adoption."
            },
            {
              id: "3",
              title: "How will you use the donated money?",
              content: "All donations will go directly toward dog-related expenses: adoption fees, initial supplies (bed, crate, leash, toys), first-year veterinary care (vaccines, spay/neuter, health checkups), and professional training classes. I'll provide updates on how funds are used."
            },
            {
              id: "4",
              title: "Are you prepared for a big dog's needs?",
              content: "Yes! I have researched extensively and understand the commitment. I have adequate living space, time for daily exercise and training, and have budgeted for ongoing expenses like food, healthcare, and grooming. This campaign helps with the initial costs."
            },
            {
              id: "5",
              title: "Will you provide updates after getting the dog?",
              content: "Absolutely! Donors will receive regular updates with photos and stories about my dog's progress, training milestones, and our adventures together. I'm excited to share this journey with everyone who helps make it possible."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Donate Now"
          tagIcon={Heart}
          title="Help Make My Dream Come True"
          description="Every donation, no matter the size, brings me closer to providing a loving home for a big dog. Join me on this journey and be part of something beautiful."
          inputPlaceholder="Enter your email for updates"
          buttonText="Support Campaign"
          termsText="By donating, you're helping create a wonderful bond between Noya and her future big dog companion. Thank you for your generosity!"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Noya's Dog Fund"
          columns={[
            {
              items: [
                { label: "About Campaign", href: "about" },
                { label: "Why Donate", href: "feature" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Testimonials", href: "testimonial" },
                { label: "FAQ", href: "faq" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}