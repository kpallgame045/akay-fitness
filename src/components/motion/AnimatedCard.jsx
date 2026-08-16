import React from 'react';
import ScrollRevealCard, {
  ScrollRevealIcon,
  ScrollRevealTitle,
  ScrollRevealText,
  ScrollRevealDivider,
  ScrollRevealCTA,
} from './ScrollRevealCard';

export default function AnimatedCard(props) {
  return <ScrollRevealCard {...props} />;
}

export const AnimatedCardIcon = ScrollRevealIcon;
export const AnimatedCardTitle = ScrollRevealTitle;
export const AnimatedCardText = ScrollRevealText;
export const AnimatedCardDivider = ScrollRevealDivider;
export const AnimatedCardCTA = ScrollRevealCTA;
