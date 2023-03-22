import { createServer, Model } from "miragejs";

export default function () {
  createServer({
    models: {
      user: Model,
      underGraduateApplicant: Model
    },

    //Initial Values
    seeds(server) {
      server.create("user", {
        id: "1",
        FullName: "Asum Victor",
        Email: "Yoguay@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        updated: true,
      });
      server.create("user", {
        id: "2",
        FullName: "Opoku Ware",
        Email: "Yoguay@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Undergrad",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        updated: false,
      });
      server.create("user", {
        id: "3",
        FullName: "Agyeiwaa Victoria",
        Email: "Yoguay@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Graduate",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Female",
        Phone: "65466464356",
      });
      server.create("user", {
        id: "1",
        FullName: "Aksum Empire",
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
      });

      //Seed for New undergraduate applicants 
       server.create("underGraduateApplicant", {
        id: "1",
        FirstName: "Aksum",
        LastName: 'Victor',
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: '',
        YearOfCompletion:'',
        WasscePDF: '',
        EssayQuestion: '',
        EssayAnswer: '',
        EssayAnswerPDF: '',
        DateAndTime:'Mar 22 2023, 14:30pm'
      });
       server.create("underGraduateApplicant", {
        id: "2",
        FirstName: "Amakye",
        LastName: 'Kogi',
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: '',
        YearOfCompletion:'',
        WasscePDF: '',
        EssayQuestion: '',
        EssayAnswer: '',
        EssayAnswerPDF: '',
        DateAndTime:'Mar 22 2023, 14:30pm'
      });
      server.create("underGraduateApplicant", {
        id: "3",
        FirstName: "Lord",
        LastName: 'Dumbp',
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: '',
        YearOfCompletion:'',
        WasscePDF: '',
        EssayQuestion: '',
        EssayAnswer: '',
        EssayAnswerPDF: '',
        DateAndTime:'Mar 22 2023, 14:30pm'
      });
    },


    //Routes for CRUD here
    routes() {
      this.get("/api/users", (schema) => {
        return schema.users.all();
      })
 
      this.get('/api/underGraduateApplicants', (schema)=>{
        return schema.underGraduateApplicants.all()
      })

    },
  });
}
