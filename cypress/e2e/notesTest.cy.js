import LoginPage from '../support/pageObjects/LoginPage';
import NotesPage from '../support/pageObjects/NotesPage';

const loginPage = new LoginPage();
const notesPage = new NotesPage();

describe('Notes App - Create multiple home notes', () => {
  it('should login and create multiple notes under Home category', () => {
    cy.visit('https://practice.expandtesting.com/notes/app');
    
    loginPage.visitLogin();
    loginPage.enterEmail('shrikrishna.pandey1@gmail.com');
    loginPage.enterPassword('Test@123');
    loginPage.submit();

    notesPage.clickHomeCategory();

    for (let i = 1; i <= 3; i++) {
      notesPage.clickAddNote();
      notesPage.selectCategoryCheckbox();
      notesPage.enterTitle(`Home Note Completed Version ${i}`);
      notesPage.enterDescription(`Description ${i}`);
      notesPage.submitNote();
    }

    notesPage.clickWorkCategory(); // if needed
  });
});
