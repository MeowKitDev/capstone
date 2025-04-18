import { SVGProps } from 'react';
import { twMerge } from 'tailwind-merge';

const InProgressOutlineIcon = ({ className, ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    version='1.0'
    xmlns='http://www.w3.org/2000/svg'
    width='512.000000pt'
    height='512.000000pt'
    viewBox='0 0 512.000000 512.000000'
    preserveAspectRatio='xMidYMid meet'
    className={twMerge('default-icon', className)}
    {...props}>
    <g transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)' fill='currentColor' stroke='none'>
      <path
        d='M2375 4789 c-319 -44 -601 -184 -830 -414 -210 -209 -343 -459 -402
-752 -24 -122 -24 -404 0 -526 59 -293 192 -543 402 -752 207 -208 437 -332
733 -397 130 -29 413 -31 546 -5 293 59 541 191 751 402 208 207 332 437 397
733 31 140 31 424 0 564 -65 296 -189 526 -397 733 -209 210 -459 344 -746
400 -100 20 -356 28 -454 14z m358 -324 c274 -41 525 -187 701 -407 338 -421
324 -1021 -32 -1435 -165 -191 -418 -330 -672 -368 -426 -65 -853 120 -1097
476 -154 225 -222 532 -178 804 45 277 189 524 407 699 243 195 558 278 871
231z'
      />
      <path
        d='M2495 4226 c-37 -17 -70 -52 -84 -89 -7 -18 -11 -166 -11 -418 0
-313 3 -396 14 -423 20 -47 462 -402 512 -412 115 -21 211 75 190 191 -10 49
-34 74 -225 225 l-170 135 -3 352 c-3 337 -4 353 -24 379 -11 15 -32 37 -46
47 -34 25 -113 32 -153 13z'
      />
      <path
        d='M820 1584 c-234 -50 -436 -254 -485 -489 -60 -285 79 -577 336 -703
154 -76 31 -72 1889 -72 1857 0 1736 -4 1890 71 208 103 350 333 350 569 0
236 -142 466 -350 569 -154 75 -32 71 -1895 70 -1390 0 -1681 -3 -1735 -15z
m3470 -332 c72 -35 114 -75 151 -144 31 -58 34 -70 33 -148 0 -72 -4 -93 -26
-136 -39 -75 -70 -107 -140 -145 l-63 -34 -1685 0 -1685 0 -63 34 c-69 38
-110 80 -144 151 -32 66 -31 196 2 265 42 86 125 154 215 176 17 4 779 6 1695
6 l1665 -2 45 -23z'
      />
      <path
        d='M895 1106 c-67 -29 -105 -106 -91 -181 9 -47 59 -102 104 -115 25 -8
209 -10 554 -8 504 3 517 4 544 24 53 39 69 71 69 134 0 63 -16 95 -69 134
-27 21 -40 21 -554 23 -423 2 -533 0 -557 -11z'
      />
    </g>
  </svg>
);
export default InProgressOutlineIcon;
