import React from 'react'

const useHeaderTransparencyOnScroll = (
  observedSectionRef,
  headerEl,
  headerHeight,
) => {
  React.useEffect(() => { 
    console.log('observedSection', observedSectionRef.current);
    console.log('headerEl', headerEl);
    console.log('headerHeight', headerHeight);

    const observedSection = observedSectionRef.current;

    const handleScroll = (e) => {
      if (!observedSection || !headerEl) return;

      const observedSectionTop = observedSection.getBoundingClientRect().top;

      if (observedSectionTop < headerHeight) {
        headerEl.classList.add('scrolledPastHero');
      } else {
        headerEl.classList.remove('scrolledPastHero');
      }
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };


  }, [observedSectionRef, headerHeight, headerEl]);
};

export default useHeaderTransparencyOnScroll;