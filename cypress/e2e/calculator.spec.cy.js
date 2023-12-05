describe('e2e test for calculator app', () => {
  let bnt1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
  let btnPlus, btnMinus, btnEqual, dashboard, btnClear, btndivision, btnmultiply, btndot,
  btnplusminus, btnpercentages, btnsave, btnpaste, btntheme;
  let body;

  before(() => {
    cy.visit('http://localhost:3000/');
    cy.get('[class="theme-one"]').then(($el) => {
      body = $el
    });
    cy.get('[data-test="btn-1"]').then(($el) => {
      bnt1 = $el
    });
    btn2 = cy.get('[data-test="btn-2"]').then(($el) => {
      btn2 = $el
    });
    btn3 = cy.get('[data-test="btn-3"]').then(($el) => {
      btn3 = $el
    });
    cy.get('[data-test="btn-6"]').then(($el) => {
      btn6 = $el
    });
    cy.get('[onclick="printDigit(\'5\')"]').then(($el) => {
      btn5 = $el
    });
    cy.get('[onclick="printDigit(\'4\')"]').then(($el) => {
      btn4 = $el
    });
    cy.get('[onclick="printDigit(\'7\')"]').then(($el) => {
      btn7 = $el
    });
    cy.get('[onclick="printDigit(\'8\')"]').then(($el) => {
      btn8 = $el
    });
    cy.get('[data-test="btn-9"]').then(($el) => {
      btn9 = $el
    });
    cy.get('[data-test="btn-0"]').then(($el) => {
      btn0 = $el
    });
    cy.get('[data-test="btn-plus"]').then(($el) => {
      btnPlus = $el
    });
    cy.get('[data-test="btn-minus"]').then(($el) => {
      btnMinus = $el
    });
    cy.get('[data-test="dashboard"]').then(($el) => {
      dashboard = $el
    });
    cy.get('[data-test="btn-equal"]').then(($el) => {
      btnEqual = $el
    });
    cy.get('[data-test="btn-clr"]').then(($el) => {
      btnClear = $el
    });

    cy.get('[data-test="btn-slash"]').then(($el) => {
      btndivision = $el
    });
    cy.get('[data-test="btn-multiply"]').then(($el) => {
      btnmultiply = $el
    });
    cy.get('[data-test="btn-dot"]').then(($el) => {
      btndot = $el
    });
    cy.get('[data-test="btn-plus-minus"]').then(($el) => {
      btnplusminus = $el
    });
    cy.get('[data-test="btn-percentages"]').then(($el) => {
      btnpercentages = $el
    });
    cy.get('[data-test="btn-save"]').then(($el) => {
      btnsave = $el
    });
    cy.get('[data-test="btn-paste"]').then(($el) => {
      btnpaste = $el
    });
    cy.get('[data-test="btn-theme"]').then(($el) => {
      btntheme = $el
    });
  });

  it('should check expression 2+9-6', () => {
    btn2.click()
    btnPlus.click()
    btn9.click()
    btnMinus.click()
    btn6.click()

    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('2+9-6');
    })

  })

  it('should check result of expression 2+9-6', () => {
    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('5');
    })

  })
  it('should check result of expression 1+2+3+4-5-6-7-8-9', () => {
    btnClear.click()
    bnt1.click()
    btnPlus.click()
    btn2.click()
    btnPlus.click()
    btn3.click()
    btnPlus.click()
    btn4.click()
    btnMinus.click()
    btn5.click()
    btnMinus.click()
    btn6.click()
    btnMinus.click()
    btn7.click()
    btnMinus.click()
    btn8.click()
    btnMinus.click()
    btn9.click()

    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('-25');
    })
  })
  it('should check result expression 10/10', () => {
    btnClear.click()
    bnt1.click()
    btn0.click()
    btndivision.click()
    bnt1.click()
    btn0.click()
    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('1');
    })
  })

  it('should check result expression 0.5*10', () => {
    btnClear.click()
    btn0.click()
    btndot.click()
    btn5.click()

    btnmultiply.click()

    bnt1.click()
    btn0.click()
    btnEqual.click()

    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('5');
    })
  })

  it('should check result expression -0.1*99', () => {
    btnClear.click()
    btn0.click()
    btndot.click()
    bnt1.click()
    btnplusminus.click()
    btnmultiply.click()
    btn9.click()
    btn9.click()
    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('-9.9');
    })
  })

  it('should calculate 10 percent of 1,000', () => {
    btnClear.click()
    bnt1.click()
    btn0.click()
    btnpercentages.click()
    bnt1.click()
    btn0.click()
    btn0.click()
    btn0.click()
    btnEqual.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('10');
    })
  })

  it('should check clear button', () => {
    btnClear.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('');
    })
  })

  it('should check save button', () => {
    btnClear.click()
    btn2.click()
    btnPlus.click()
    btn9.click()
    btnEqual.click()
    btnsave.click()
    btnClear.click()
    btnpaste.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('11');
    })
  })

  it('should check paste button', () => {
    btnpaste.click()
    cy.wrap(dashboard).invoke('val').then(val => {
      expect(val).to.equal('11null');
    })
  })

  it('should check change theme, toggle theme button', () => {
    btntheme.click()
    cy.get('[data-test="btn-minus"]').should('have.css', 'background-color')
    .and('eq', 'green')
  })

})
