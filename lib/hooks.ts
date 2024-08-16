import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(sectionName: string, threshold = 1) {
  const { ref, inView } = useInView();
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
