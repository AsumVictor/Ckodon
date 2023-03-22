import { createServer, Model } from "miragejs";
import { nanoid } from "nanoid";

export default function () {
  createServer({
    models: {
      user: Model,
      underGraduateApplicant: Model,
      uGReview: Model,
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

      //Seeds for Review Documents
      server.create("uGReview", {
        id: nanoid(),
        student_id: '1',
        document_id: '1',
        type:'financial aid',
        date: 'Feb 20, 2022',
        deadline:'feb 15, 2016'
      });
      server.create("uGReview", {
        id: nanoid(),
        student_id: '1',
        document_id: '1',
        type:'Honors',
        date: 'Feb 20, 2022',
        deadline:'feb 15, 2016'
      });
      server.create("uGReview", {
        id: nanoid(),
        student_id: '3',
        document_id: '1',
        type:'Activities',
        date: 'Feb 20, 2022',
        deadline:'feb 15, 2016'
      });
      server.create("uGReview", {
        id: nanoid(),
        student_id: '2',
        document_id: '6',
        type:'recommendation',
        date: 'Feb 20, 2022',
        deadline:'feb 15, 2016'
      });
      server.create("uGReview", {
        id: nanoid(),
        student_id: '1',
        document_id: '4',
        type:'essays',
        date: 'Feb 20, 2022',
        deadline:'feb 15, 2016'
      });



    
    },


    //Routes for CRUD here
    routes() {

    //ALL GET REQUESTS
      this.get("/api/users", (schema) => {
        return schema.users.all();
      })
 
      this.get('/api/underGraduateApplicants', (schema)=>{
        return schema.underGraduateApplicants.all()
      })

      this.get("/api/uGReviews", (schema) => {
        return schema.uGReviews.all()
      })

    },
  });
}
