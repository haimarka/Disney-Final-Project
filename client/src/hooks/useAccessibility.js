import { useState } from 'react';

const useAccessibility = () => {
    const [accessibilty, setAccessibility] = useState({
        colorReversal: false,
        fontIncrease: false,
        highlighting: false,
        hidden: true,
    });

    return {
        ...accessibilty,
        actions: {
            toggleHidden: () => setAccessibility({...accessibilty, hidden: !accessibilty.hidden }),
            toggleFontIncrease: () => setAccessibility({...accessibilty, fontIncrease: !accessibilty.fontIncrease }),
            toggleHighlighting: () => setAccessibility({...accessibilty, highlighting: !accessibilty.highlighting }),
            toggleColorReversal: () => setAccessibility({...accessibilty, colorReversal: !accessibilty.colorReversal })
        }
    }
}

export default useAccessibility;