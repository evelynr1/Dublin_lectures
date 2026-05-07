Wanderlines — Lecture 2 Starter
================================

This is a working starter for the lecture 2 hands-on assignment.

What you have:
  index.html   Page scaffold — sticky header + 2 gallery sections
               (12 cards in each, so already meets the 10-image minimum)
  styles.css   Base styles + clearly marked TODO blocks for the work
  README.txt   This file

Open index.html in your browser. Everything works, it just isn't styled
the way the assignment requires yet.

Required (before the break)
---------------------------
1. Make .site-header sticky to the top of the viewport.
   It must remain visible while you scroll.
2. Style .gallery--grid with display: grid using minmax() so it adapts
   to window width without writing breakpoints.
3. Style .gallery--flex with display: flex + flex-wrap so cards reflow
   into rows. Set a flex shorthand on .gallery--flex .card.

Required (after the break, in the second hands-on block)
--------------------------------------------------------
4. Add mobile-first @media (min-width: ...) breakpoints. Start small,
   layer up.
5. Add @media print rules. Hide the sticky header. Make galleries
   readable on paper (not crammed).
6. Add @media (prefers-reduced-motion: reduce). If you added animation
   in stretch goals, switch it off.
7. Add @media (prefers-color-scheme: dark). Override the :root color
   custom properties — the rest of the stylesheet should not need to
   change. Re-check contrast in dark mode with axe / WAVE.

Quick verification at the end
-----------------------------
Toggle each preference in your OS while the page is open:
  - Resize window to 320px wide  -> mobile layout works
  - Cmd/Ctrl+P                    -> print preview hides the header
  - OS Reduce motion ON           -> animations stop
  - OS dark mode ON               -> palette flips, contrast still passes

Replace the placeholder images
------------------------------
The cards use https://picsum.photos/... so the page renders even before
you have your own photos. Swap in your travel photos AND write specific
alt text for each one. "Cliff at sunset" is mood; "Steep, unfenced cliff
edge above the Atlantic at the Cliffs of Moher" is information.
