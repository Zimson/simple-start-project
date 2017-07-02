"use strict";

import module1 from './modules/module1';
import module2 from './modules/module2';
// -----------------------------------------------------------------------------


window.addEventListener('DOMContentLoaded', startPage, false);



// -----------------------------------------------------------------------------
function startPage() {
  // константы, переменные, базовые настройки ----------------------------------
  module1();
  module2();
}
