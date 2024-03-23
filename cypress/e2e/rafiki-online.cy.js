describe('Rafiki-online Automation',()=>{

  it('rafiki',()=>{

      cy.visit("https://rafiki-online.com/"); //Lauch the Application Under Test(AUT)

      //cy.url().should('contain','rafiki-online'); //check the uniform resrource locator if it contains "rafiki-online"

      //cy.title().should('have.value','Cart - Rafiki Online'); //assert the title

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2997 > a').click(); //click on the login link

      cy.get('.icon-menu-fine').scrollIntoView(); //Scroll into view menu icon

      //cy.fixture('user').then((data)={ //wrap the fixture

      cy.get('#username-2984').type("obekevicent@gmail.com") //clear the usernameorEmail textfield and enter  username oremail

      cy.get('#user_password-2984').type("OV@1rafiki") //clear the password textfield and enter password

      cy.get('#um-submit-btn').click() //click on the login button

      //});

      //cy.get('.um-name > a').should('have.text',data.expected)

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('[href="https://rafiki-online.com/?page_id=2952"]').click()

      cy.get(':nth-child(7) > .gallery-icon > .image_frame > .image_wrapper > a > .mask').click()

      cy.get('.mfp-close').click()

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2955 > .menu-toggle').click()

      cy.get('#menu-item-2537 > a').click()

      cy.get('#slick-slide01 > .item_wrapper > .desc > h4').click()

      cy.get('.single_add_to_cart_button').scrollIntoView().click()

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2955 > .menu-toggle').click()

      cy.get('#menu-item-2483 > a').click()

      cy.get('#slick-slide00 > .item_wrapper > .desc > h4 > a').click()

      cy.get('.single_add_to_cart_button').scrollIntoView().click()


      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2955 > .menu-toggle').click()

      cy.get('#menu-item-2484 > a').click()

      cy.get('#slick-slide00 > .item_wrapper > .desc > h4 > a').click()

      cy.get('.single_add_to_cart_button').scrollIntoView().click()

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2955 > .menu-toggle').click()

      cy.get('#menu-item-2482 > a').click()

      cy.get('#slick-slide00 > .item_wrapper > .desc > h4 > a').click()

      cy.get('.icon-menu-fine').scrollIntoView().click(); //Scroll into view menu icon and then click on it

      cy.get('#menu-item-2955 > .menu-toggle').click()

      cy.get('#menu-item-2814 > a > span').click()

       cy.get('.single_add_to_cart_button').scrollIntoView().click()

      cy.get('.icon-bag-fine').click()

      cy.get('[name="update_cart"]').scrollIntoView()

      cy.get('.checkout-button').click()

      cy.get('.woocommerce-billing-fields > h3').scrollIntoView()

      cy.get('#billing_first_name').type("obeke")

      cy.get('#billing_last_name').type("vicent")

      cy.get('#billing_company').type("mo2rise company limited")

      cy.get('#select2-billing_country-container').click()

      cy.get('.select2-search__field').clear().type("Uganda")

      cy.get('#select2-billing_country-result-wgg6-UG').click()

      cy.get('#billing_address_1_field > label').scrollIntoView()

      cy.get('#billing_address_1').type("Kawempe,Mulago")

      cy.get('#billing_city').type("Kampala")

      cy.get('#billing_city').click()

      cy.get('.select2-search__field').type("kampala")

      cy.get('#select2-billing_state-result-wvwn-UG102').click()

      cy.get('#billing_phone').type("0701263898")

      cy.get('#order_review_heading').scrollIntoView()

      cy.get('#terms').click()

      cy.get('#place_order').click()



      

  })
})