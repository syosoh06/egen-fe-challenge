/**
 * Created by sohamChakraborty on 4/30/16.
 */
describe('credit card service tests', function () {

    var creditCardFactory;

   beforeEach(function() {
       module('app');

       inject(function (_creditCardFactory_) {
           creditCardFactory = _creditCardFactory_;
       });
   });


    it('correctly identifies the card type and card logo', function () {
        creditCardFactory.identifyCardTypeAndSetLogo("hjfjhgdd");
       expect(creditCardFactory.getCardType()).toEqual("default");
        expect(creditCardFactory.getLogoUrl()).toEqual("creditcards/credit.png");
    });

    it('should correctly identify visa card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("4111111111111111");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/visa_credit-card-logos/new_visa_big.gif");
        creditCardFactory.identifyCardTypeAndSetLogo("4012888888881881");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/visa_credit-card-logos/new_visa_big.gif");
        creditCardFactory.identifyCardTypeAndSetLogo("4222222222222");
        expect(creditCardFactory.getCardType()).toEqual("visa");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/visa_credit-card-logos/new_visa_big.gif");
    });

    it('should correctly identify amex card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("378282246310005");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/american_express_credit-card-logos/american_express_logo_3.gif");
        creditCardFactory.identifyCardTypeAndSetLogo("371449635398431");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/american_express_credit-card-logos/american_express_logo_3.gif");
        creditCardFactory.identifyCardTypeAndSetLogo("378734493671000");
        expect(creditCardFactory.getCardType()).toEqual("amex");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/american_express_credit-card-logos/american_express_logo_3.gif");
    });

    it('should correctly identify master card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("5555555555554444");
        expect(creditCardFactory.getCardType()).toEqual("mastercard");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/mastercard_credit-card-logos/mastercard_logo_3.gif");
    });

    it('should correctly identify discover card type and logo', function(){
        creditCardFactory.identifyCardTypeAndSetLogo("6011111111111117");
        expect(creditCardFactory.getCardType()).toEqual("discover");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/discover_credit-card-logos/discover_logo_3.gif");
        creditCardFactory.identifyCardTypeAndSetLogo("6011000990139424");
        expect(creditCardFactory.getCardType()).toEqual("discover");
        expect(creditCardFactory.getLogoUrl()).toEqual("http://www.credit-card-logos.com/images/discover_credit-card-logos/discover_logo_3.gif");
    });


    it("Should be true", function(){
        expect(true).toBeTruthy();
    });

});