describe('example facebook app', () => {
  beforeEach(() => {  
    cy.visit('http://localhost:3000')
    // cy.get('button').first().click();
  })

  it('login', () => {
    
    cy.get('button').first().click();
  //   cy.visit('https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?access_type=offline&client_id=1026510654793-3r6adpiefpfu7fl8sfc15mqt6qlpe87a.apps.googleusercontent.com&prompt=consent&redirect_to=http%3A%2F%2Flocalhost%3A3000%2Fauth%2Fcallback&redirect_uri=https%3A%2F%2Fwlcwonwprftismlrkejl.supabase.co%2Fauth%2Fv1%2Fcallback&response_type=code&scope=email%20profile&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTQ3MjY2MjIsInNpdGVfdXJsIjoiaHR0cDovL2xvY2FsaG9zdDozMDAwIiwiaWQiOiIwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAiLCJmdW5jdGlvbl9ob29rcyI6bnVsbCwicHJvdmlkZXIiOiJnb29nbGUiLCJyZWZlcnJlciI6Imh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hdXRoL2NhbGxiYWNrIiwiZmxvd19zdGF0ZV9pZCI6ImNhZDk5MWM2LTY3YjEtNGRmZC05NGU2LWE2M2MxNTk4NTBjMiJ9.0C_WqkzUMOuScfIqC74A38dz9n2yMq0ZSA6Sz9MW8r4&service=lso&o2v=2&flowName=GeneralOAuthFlow')
  //   cy.get('[name="identifier"]').click().type('abrendakhenya@gmail.com');
  });

  describe('Google', function () {
    beforeEach(function () {
      cy.task('db:seed')
      cy.loginByGoogleApi()
    })
  
    it('shows onboarding', function () {
      cy.contains('Get Started').should('be.visible')
    })
  });
  // it('login con Google', () => {
  //   cy.get('input[type="email"]').type('abrendakhenya@gmail.com');
  //   cy.get('button[type="submit"]').click();
  //   cy.get('input[type="password"]').type('del1al10');
  //   cy.get('button[type="submit"]').click();
  // });
  // it('correo', () => {
  //   // cy.get('input').first().click().type('abrendakhenya@gmail.com');
  //   // cy.get('[id$=password]').first().click().type('58498');
  //   // cy.get('button').first().click();
  //   // cy.get('input[type="email"]').type('abrendakhenya@gmail.com');
  //   cy.get('[id="identifierId"]').click
  //   // Haz clic en el botón "Siguiente" (puede variar según la interfaz de Google)
  //   cy.contains('Siguiente').click();

  //   // Llena el campo de contraseña de Google
  //   cy.get('input[type="password"]').type('tu_contraseña_de_google');

  //   // Haz clic en el botón "Siguiente" para iniciar sesión (puede variar según la interfaz de Google)
  //   cy.contains('Siguiente').click();
  //  });
})
