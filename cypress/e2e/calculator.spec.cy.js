describe("e2e test for calculator app", () => {
  let btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9, btn0;
  let btnPlus, btnMinus, btnEqual, dashboard;
  let btnMultiply,
    btnDivide,
    btnDot,
    btnPercent,
    btnClear,
    btnSave,
    btnPaste,
    btnToggleTheme,
    btnPlusMinus;

  before(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[data-test="btn-1"]').then(($el) => {
      btn1 = $el;
    });
    btn2 = cy.get('[data-test="btn-2"]').then(($el) => {
      btn2 = $el;
    });
    cy.get('[data-test="btn-3"]').then(($el) => {
      btn3 = $el;
    });
    cy.get('[data-test="btn-4"]').then(($el) => {
      btn4 = $el;
    });
    cy.get('[data-test="btn-5"]').then(($el) => {
      btn5 = $el;
    });
    cy.get('[data-test="btn-6"]').then(($el) => {
      btn6 = $el;
    });
    cy.get('[data-test="btn-7"]').then(($el) => {
      btn7 = $el;
    });
    cy.get('[data-test="btn-8"]').then(($el) => {
      btn8 = $el;
    });
    cy.get('[data-test="btn-9"]').then(($el) => {
      btn9 = $el;
    });
    cy.get('[data-test="btn-0"]').then(($el) => {
      btn0 = $el;
    });
    cy.get('[data-test="btn-multiply"]').then(($el) => {
      btnMultiply = $el;
    });
    cy.get('[data-test="btn-slash"]').then(($el) => {
      btnDivide = $el;
    });
    cy.get('[data-test="btn-dot"]').then(($el) => {
      btnDot = $el;
    });
    cy.get('[data-test="btn-percentages"]').then(($el) => {
      btnPercent = $el;
    });
    cy.get('[data-test="btn-clr"]').then(($el) => {
      btnClear = $el;
    });
    cy.get('[data-test="btn-save"]').then(($el) => {
      btnSave = $el;
    });
    cy.get('[data-test="btn-paste"]').then(($el) => {
      btnPaste = $el;
    });
    cy.get('[data-test="btn-theme"]').then(($el) => {
      btnToggleTheme = $el;
    });
    cy.get('[data-test="btn-plus"]').then(($el) => {
      btnPlus = $el;
    });
    cy.get('[data-test="btn-minus"]').then(($el) => {
      btnMinus = $el;
    });
    cy.get('[data-test="dashboard"]').then(($el) => {
      dashboard = $el;
    });
    cy.get('[data-test="btn-equal"]').then(($el) => {
      btnEqual = $el;
    });
    cy.get('[data-test="btn-plus-minus"]').then(($el) => {
      btnPlusMinus = $el;
    });
  });

  it("should check expression 2+9-6", () => {
    btn2.click();
    btnPlus.click();
    btn9.click();
    btnMinus.click();
    btn6.click();

    cy.wrap(dashboard)
      .invoke("val")
      .then((val) => {
        expect(val).to.equal("2+9-6");
      });
  });

  it("should check result of expression 2+9-6", () => {
    btnEqual.click();
    cy.wrap(dashboard)
      .invoke("val")
      .then((val) => {
        expect(val).to.equal("5");
      });
  });
  it("should check result of expression 1+2+3+4-5-6-7-8-9", () => {
    btn1.click();
    btnPlus.click();
    btn2.click();
    btnPlus.click();
    btn3.click();
    btnPlus.click();
    btn4.click();
    btnMinus.click();
    btn5.click();
    btnMinus.click();
    btn6.click();
    btnMinus.click();
    btn7.click();
    btnMinus.click();
    btn8.click();
    btnMinus.click();
    btn9.click();
    btnEqual.click();
    btnEqual.click();

    cy.wrap(dashboard)
      .invoke("val")
      .then((val) => {
        expect(val).to.equal("25");
      });
  });
  it("should check result expression 10/10", () => {
    btnClear.click();
    btn1.click();
    btn0.click();
    btnDivide.click();
    btn1.click();
    btn0.click();
    btnEqual.click();

    cy.wrap(dashboard).invoke("val").should("eq", "1");
  });

  it("should check result expression 0.5*10", () => {
    btnClear.click();
    btn0.click();
    btnDot.click();
    btn5.click();
    btnMultiply.click();
    btn1.click();
    btn0.click();
    btnEqual.click();

    cy.wrap(dashboard).invoke("val").should("eq", "5");
  });

  it("should check result expression -0.1*99", () => {
    btnClear.click();
    btnPlusMinus.click();
    btn0.click();
    btnDot.click();
    btn1.click();
    btnMultiply.click();
    btn9.click();
    btn9.click();
    btnEqual.click();

    cy.wrap(dashboard).invoke("val").should("eq", "-9.9");
  });

  it("should calculate 10 percent of 1,000", () => {
    btnClear.click();
    btn1.click();
    btn0.click();
    btn0.click();
    btn0.click();
    btnPercent.click();
    btnEqual.click();

    cy.wrap(dashboard).invoke("val").should("eq", "10");
  });

  it("should check clear button", () => {
    btn1.click();
    btn2.click();
    btnClear.click();

    cy.wrap(dashboard).invoke("val").should("eq", "");
  });

  it("should check save button", () => {
    btn2.click();
    btnMultiply.click();
    btn3.click();
    btnSave.click();
    btnClear.click();
    btnPaste.click();

    cy.wrap(dashboard).invoke("val").should("eq", "2*3");
  });

  it("should check paste button", () => {
    btnPaste.click();

    cy.wrap(dashboard).invoke("val").should("not.be.empty");
  });

  it("should check change theme, toggle theme button", () => {
    btnToggleTheme.click();
    cy.get("body").should("have.class", "theme-one");
  });
});
