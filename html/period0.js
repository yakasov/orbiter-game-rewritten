"use strict";

const PERIOD0TAB = `
<div class="element-table-body">
  <div class="element-table-container">
    <!-- Row 1 -->
    <button class="element-table-item" id="element-tile-h" onclick="EL.elementClicked('hydrogen')">H</button>
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item" id="element-tile-he" onclick="EL.elementClicked('helium')">He</button>

    <!-- Row 2 -->
    <button class="element-table-item disabled" id="element-tile-li" onclick="EL.elementClicked('lithium')">Li</button>
    <button class="element-table-item disabled" id="element-tile-be" onclick="EL.elementClicked('beryllium')">Be</button>
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item disabled" id="element-tile-b" onclick="EL.elementClicked('boron')">B</button>
    <button class="element-table-item disabled" id="element-tile-c" onclick="EL.elementClicked('carbon')">C</button>
    <button class="element-table-item disabled" id="element-tile-n" onclick="EL.elementClicked('nitrogen')">N</button>
    <button class="element-table-item disabled" id="element-tile-o" onclick="EL.elementClicked('oxygen')">O</button>
    <button class="element-table-item disabled" id="element-tile-f" onclick="EL.elementClicked('fluorine')">F</button>
    <button class="element-table-item disabled" id="element-tile-ne" onclick="EL.elementClicked('neon')">Ne</button>

    <!-- Row 3 -->
    <button class="element-table-item disabled" id="element-tile-na" onclick="EL.elementClicked('sodium')">Na</button>
    <button class="element-table-item disabled" id="element-tile-mg" onclick="EL.elementClicked('magnesium')">Mg</button>
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item disabled" id="element-tile-al" onclick="EL.elementClicked('aluminium')">Al</button>
    <button class="element-table-item disabled" id="element-tile-si" onclick="EL.elementClicked('silicon')">Si</button>
    <button class="element-table-item disabled" id="element-tile-p" onclick="EL.elementClicked('phosphorus')">P</button>
    <button class="element-table-item disabled" id="element-tile-s" onclick="EL.elementClicked('sulfur')">S</button>
    <button class="element-table-item disabled" id="element-tile-cl" onclick="EL.elementClicked('chlorine')">Cl</button>
    <button class="element-table-item disabled" id="element-tile-ar" onclick="EL.elementClicked('argon')">Ar</button>

    <!-- Row 4 -->
    <button class="element-table-item disabled" id="element-tile-k" onclick="EL.elementClicked('potassium')">K</button>
    <button class="element-table-item disabled" id="element-tile-ca" onclick="EL.elementClicked('calcium')">Ca</button>
    <button class="element-table-item disabled" id="element-tile-sc" onclick="EL.elementClicked('scandium')">Sc</button>
    <button class="element-table-item disabled" id="element-tile-ti" onclick="EL.elementClicked('titanium')">Ti</button>
    <button class="element-table-item disabled" id="element-tile-v" onclick="EL.elementClicked('vanadium')">V</button>
    <button class="element-table-item disabled" id="element-tile-cr" onclick="EL.elementClicked('chromium')">Cr</button>
    <button class="element-table-item disabled" id="element-tile-mn" onclick="EL.elementClicked('manganese')">Mn</button>
    <button class="element-table-item disabled" id="element-tile-fe" onclick="EL.elementClicked('iron')">Fe</button>
    <button class="element-table-item disabled" id="element-tile-co" onclick="EL.elementClicked('cobalt')">Co</button>
    <button class="element-table-item disabled" id="element-tile-ni" onclick="EL.elementClicked('nickel')">Ni</button>
    <button class="element-table-item disabled" id="element-tile-cu" onclick="EL.elementClicked('copper')">Cu</button>
    <button class="element-table-item disabled" id="element-tile-zn" onclick="EL.elementClicked('zinc')">Zn</button>
    <button class="element-table-item disabled" id="element-tile-ga" onclick="EL.elementClicked('gallium')">Ga</button>
    <button class="element-table-item disabled" id="element-tile-ge" onclick="EL.elementClicked('germanium')">Ge</button>
    <button class="element-table-item disabled" id="element-tile-as" onclick="EL.elementClicked('arsenic')">As</button>
    <button class="element-table-item disabled" id="element-tile-se" onclick="EL.elementClicked('selenium')">Se</button>
    <button class="element-table-item disabled" id="element-tile-br" onclick="EL.elementClicked('bromine')">Br</button>
    <button class="element-table-item disabled" id="element-tile-kr" onclick="EL.elementClicked('krypton')">Kr</button>

    <!-- Row 5 -->
    <button class="element-table-item disabled" id="element-tile-rb" onclick="EL.elementClicked('rubidium')">Rb</button>
    <button class="element-table-item disabled" id="element-tile-sr" onclick="EL.elementClicked('strontium')">Sr</button>
    <button class="element-table-item disabled" id="element-tile-y" onclick="EL.elementClicked('yttrium')">Y</button>
    <button class="element-table-item disabled" id="element-tile-zr" onclick="EL.elementClicked('zirconium')">Zr</button>
    <button class="element-table-item disabled" id="element-tile-nb" onclick="EL.elementClicked('niobium')">Nb</button>
    <button class="element-table-item disabled" id="element-tile-mo" onclick="EL.elementClicked('molybdenum')">Mo</button>
    <button class="element-table-item disabled" id="element-tile-tc" onclick="EL.elementClicked('technetium')">Tc</button>
    <button class="element-table-item disabled" id="element-tile-ru" onclick="EL.elementClicked('ruthenium')">Ru</button>
    <button class="element-table-item disabled" id="element-tile-rh" onclick="EL.elementClicked('rhodium')">Rh</button>
    <button class="element-table-item disabled" id="element-tile-pd" onclick="EL.elementClicked('palladium')">Pd</button>
    <button class="element-table-item disabled" id="element-tile-ag" onclick="EL.elementClicked('silver')">Ag</button>
    <button class="element-table-item disabled" id="element-tile-cd" onclick="EL.elementClicked('cadmium')">Cd</button>
    <button class="element-table-item disabled" id="element-tile-in" onclick="EL.elementClicked('indium')">In</button>
    <button class="element-table-item disabled" id="element-tile-sn" onclick="EL.elementClicked('tin')">Sn</button>
    <button class="element-table-item disabled" id="element-tile-sb" onclick="EL.elementClicked('antimony')">Sb</button>
    <button class="element-table-item disabled" id="element-tile-te" onclick="EL.elementClicked('tellurium')">Te</button>
    <button class="element-table-item disabled" id="element-tile-i" onclick="EL.elementClicked('iodine')">I</button>
    <button class="element-table-item disabled" id="element-tile-xe" onclick="EL.elementClicked('xenon')">Xe</button>

    <!-- Row 6 -->
    <button class="element-table-item disabled" id="element-tile-cs" onclick="EL.elementClicked('cesium')">Cs</button>
    <button class="element-table-item disabled" id="element-tile-ba" onclick="EL.elementClicked('barium')">Ba</button>
    <button class="element-table-item disabled" id="element-tile-la" onclick="EL.elementClicked('lanthanum')">La</button>
    <button class="element-table-item disabled" id="element-tile-hf" onclick="EL.elementClicked('hafnium')">Hf</button>
    <button class="element-table-item disabled" id="element-tile-ta" onclick="EL.elementClicked('tantalum')">Ta</button>
    <button class="element-table-item disabled" id="element-tile-w" onclick="EL.elementClicked('tungsten')">W</button>
    <button class="element-table-item disabled" id="element-tile-re" onclick="EL.elementClicked('rhenium')">Re</button>
    <button class="element-table-item disabled" id="element-tile-os" onclick="EL.elementClicked('osmium')">Os</button>
    <button class="element-table-item disabled" id="element-tile-ir" onclick="EL.elementClicked('iridium')">Ir</button>
    <button class="element-table-item disabled" id="element-tile-pt" onclick="EL.elementClicked('platinum')">Pt</button>
    <button class="element-table-item disabled" id="element-tile-au" onclick="EL.elementClicked('gold')">Au</button>
    <button class="element-table-item disabled" id="element-tile-hg" onclick="EL.elementClicked('mercury')">Hg</button>
    <button class="element-table-item disabled" id="element-tile-tl" onclick="EL.elementClicked('thallium')">Tl</button>
    <button class="element-table-item disabled" id="element-tile-pb" onclick="EL.elementClicked('lead')">Pb</button>
    <button class="element-table-item disabled" id="element-tile-bi" onclick="EL.elementClicked('bismuth')">Bi</button>
    <button class="element-table-item disabled" id="element-tile-po" onclick="EL.elementClicked('polonium')">Po</button>
    <button class="element-table-item disabled" id="element-tile-at" onclick="EL.elementClicked('astatine')">At</button>
    <button class="element-table-item disabled" id="element-tile-rn" onclick="EL.elementClicked('radon')">Rn</button>

    <!-- Row 7 -->
    <button class="element-table-item disabled" id="element-tile-fr" onclick="EL.elementClicked('francium')">Fr</button>
    <button class="element-table-item disabled" id="element-tile-ra" onclick="EL.elementClicked('radium')">Ra</button>
    <button class="element-table-item disabled" id="element-tile-ac" onclick="EL.elementClicked('actinium')">Ac</button>
    <button class="element-table-item disabled" id="element-tile-rf" onclick="EL.elementClicked('rutherfordium')">Rf</button>
    <button class="element-table-item disabled" id="element-tile-db" onclick="EL.elementClicked('dubnium')">Db</button>
    <button class="element-table-item disabled" id="element-tile-sg" onclick="EL.elementClicked('seaborgium')">Sg</button>
    <button class="element-table-item disabled" id="element-tile-bh" onclick="EL.elementClicked('bohrium')">Bh</button>
    <button class="element-table-item disabled" id="element-tile-hs" onclick="EL.elementClicked('hassium')">Hs</button>
    <button class="element-table-item disabled" id="element-tile-mt" onclick="EL.elementClicked('meitnerium')">Mt</button>
    <button class="element-table-item disabled" id="element-tile-ds" onclick="EL.elementClicked('darmstadtium')">Ds</button>
    <button class="element-table-item disabled" id="element-tile-rg" onclick="EL.elementClicked('roentgenium')">Rg</button>
    <button class="element-table-item disabled" id="element-tile-cn" onclick="EL.elementClicked('copernicium')">Cn</button>
    <button class="element-table-item disabled" id="element-tile-nh" onclick="EL.elementClicked('nihonium')">Nh</button>
    <button class="element-table-item disabled" id="element-tile-fl" onclick="EL.elementClicked('flerovium')">Fl</button>
    <button class="element-table-item disabled" id="element-tile-mc" onclick="EL.elementClicked('moscovium')">Mc</button>
    <button class="element-table-item disabled" id="element-tile-lv" onclick="EL.elementClicked('livermorium')">Lv</button>
    <button class="element-table-item disabled" id="element-tile-ts" onclick="EL.elementClicked('tennessine')">Ts</button>
    <button class="element-table-item disabled" id="element-tile-og" onclick="EL.elementClicked('oganesson')">Og</button>

    <!-- Row 8 -->
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item disabled" id="element-tile-ce" onclick="EL.elementClicked('cerium')">Ce</button>
    <button class="element-table-item disabled" id="element-tile-pr" onclick="EL.elementClicked('praseodymium')">Pr</button>
    <button class="element-table-item disabled" id="element-tile-nd" onclick="EL.elementClicked('neodymium')">Nd</button>
    <button class="element-table-item disabled" id="element-tile-pm" onclick="EL.elementClicked('promethium')">Pm</button>
    <button class="element-table-item disabled" id="element-tile-sm" onclick="EL.elementClicked('samarium')">Sm</button>
    <button class="element-table-item disabled" id="element-tile-eu" onclick="EL.elementClicked('europium')">Eu</button>
    <button class="element-table-item disabled" id="element-tile-gd" onclick="EL.elementClicked('gadolinium')">Gd</button>
    <button class="element-table-item disabled" id="element-tile-tb" onclick="EL.elementClicked('terbium')">Tb</button>
    <button class="element-table-item disabled" id="element-tile-dy" onclick="EL.elementClicked('dysprosium')">Dy</button>
    <button class="element-table-item disabled" id="element-tile-ho" onclick="EL.elementClicked('holmium')">Ho</button>
    <button class="element-table-item disabled" id="element-tile-er" onclick="EL.elementClicked('erbium')">Er</button>
    <button class="element-table-item disabled" id="element-tile-tm" onclick="EL.elementClicked('thulium')">Tm</button>
    <button class="element-table-item disabled" id="element-tile-yb" onclick="EL.elementClicked('ytterbium')">Yb</button>
    <button class="element-table-item disabled" id="element-tile-lu" onclick="EL.elementClicked('lutetium')">Lu</button>
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />

    <!-- Row 9 -->
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item disabled" id="element-tile-th" onclick="EL.elementClicked('thorium')">Th</button>
    <button class="element-table-item disabled" id="element-tile-pa" onclick="EL.elementClicked('protactinium')">Pa</button>
    <button class="element-table-item disabled" id="element-tile-u" onclick="EL.elementClicked('uranium')">U</button>
    <button class="element-table-item disabled" id="element-tile-np" onclick="EL.elementClicked('neptunium')">Np</button>
    <button class="element-table-item disabled" id="element-tile-pu" onclick="EL.elementClicked('plutonium')">Pu</button>
    <button class="element-table-item disabled" id="element-tile-am" onclick="EL.elementClicked('americium')">Am</button>
    <button class="element-table-item disabled" id="element-tile-cm" onclick="EL.elementClicked('curium')">Cm</button>
    <button class="element-table-item disabled" id="element-tile-bk" onclick="EL.elementClicked('berkelium')">Bk</button>
    <button class="element-table-item disabled" id="element-tile-cf" onclick="EL.elementClicked('californium')">Cf</button>
    <button class="element-table-item disabled" id="element-tile-es" onclick="EL.elementClicked('einsteinium')">Es</button>
    <button class="element-table-item disabled" id="element-tile-fm" onclick="EL.elementClicked('fermium')">Fm</button>
    <button class="element-table-item disabled" id="element-tile-md" onclick="EL.elementClicked('mendelevium')">Md</button>
    <button class="element-table-item disabled" id="element-tile-no" onclick="EL.elementClicked('nobelium')">No</button>
    <button class="element-table-item disabled" id="element-tile-lr" onclick="EL.elementClicked('lawrencium')">Lr</button>
    <button class="element-table-item hidden-table-item" />
    <button class="element-table-item hidden-table-item" />
  </div>
</div>

<div class="content subgroup center">
  <div class="content-group">
    <p id="element-info"></p>
  </div>
</div>
`