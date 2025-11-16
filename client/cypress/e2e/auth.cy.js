describe('Critical flows', () => {
before(() => {
cy.visit('/');
});


it('loads homepage', () => {
cy.contains('App');
});


// Example registration/login flow — adapt selectors to your app
it('can sign up and login (example)', () => {
// cy.get('a[href="/register"]').click();
// cy.get('input[name="email"]').type('test@example.com');
// cy.get('input[name="password"]').type('password');
// cy.get('button[type=submit]').click();
// cy.contains('Welcome');
});
});