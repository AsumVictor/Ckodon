import { createServer, Model } from "miragejs";
import { nanoid } from "nanoid";

export default function () {
  createServer({
    models: {
      user: Model,
      underGraduateApplicant: Model,
      uGReview: Model,
      honor: Model,
    },

    //Initial Values
    seeds(server) {
      server.create("user", {
        id: nanoid(6),
        FirstName: "Asum",
        LastName: " Victor",
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
        id: nanoid(6),
        FirstName: "Opoku",
        LastName: " Ware",
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
        id: nanoid(6),
        FirstName: "Agyeiwaa",
        LastName: " Victoria",
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
        id: nanoid(6),
        FirstName: "Aksum",
        LastName: " Empire",
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
        id: nanoid(6),
        FirstName: "Aksum",
        LastName: "Victor",
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: "",
        YearOfCompletion: "",
        WasscePDF: "",
        EssayQuestion: `          Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,

        EssayAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  
        Aliquam etiam erat velit scelerisque in dictum non consectetur. Lectus nulla at volutpat diam ut venenatis tellus. Nisi scelerisque eu ultrices 
        vitae. Nisi est sit amet facilisis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas ultricies mi eget mauris pharetra et. Nam libero justo laoreet sit amet cursus sit amet dictum. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Turpis egestas sed tempus urna. Laoreet non curabitur gravida arcu ac tortor. Eget velit 
               aliquet sagittis id consectetur purus ut faucibus pulvinar.
              Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Interdum 
                 velit euismod in pellentesque massa placerat duis ultricies lacus. Eget arcu dictum varius duis at consectetur lorem donec massa. Commodo elit at imperdiet dui. Eget felis eget nunc lobortis mattis aliquam. Mi in nulla posuere sollicitudin aliquam ultrices. Lobortis mattis aliquam faucibus purus in massa tempor nec. Accumsan lacus vel facilisis volutpat est velit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Risus ultricies tristique nulla aliquet enim. Etiam erat velit scelerisque in dictum non consectetur a erat. Est pellentesque elit ullamcorper dignissim cras. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut eu sem integer vitae justo eget magna.
          Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,
        EssayAnswerPDF: "",
        DateAndTime: "Mar 22 2023, 14:30pm",
      });
      server.create("underGraduateApplicant", {
        id: nanoid(6),
        FirstName: "Areana",
        LastName: "Victoria",
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "undergrad",
        Location: "Sunyani",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Female",
        Phone: "65466464356",
        CurrentUniversity: "",
        YearOfCompletion: "",
        WasscePDF: "",
        EssayQuestion: `          Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,

        EssayAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lectus nulla at volutpat diam ut venenatis tellus. Nisi scelerisque eu ultrices vitae. Nisi est sit amet facilisis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas ultricies mi eget mauris pharetra et. Nam libero justo laoreet sit amet cursus sit amet dictum. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Turpis egestas sed tempus urna. Laoreet non curabitur gravida arcu ac tortor. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.

Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Eget arcu dictum varius duis at consectetur lorem donec massa. Commodo elit at imperdiet dui. Eget felis eget nunc lobortis mattis aliquam. Mi in nulla posuere sollicitudin aliquam ultrices. Lobortis mattis aliquam faucibus purus in massa tempor nec. Accumsan lacus vel facilisis volutpat est velit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Risus ultricies tristique nulla aliquet enim. Etiam erat velit scelerisque in dictum non consectetur a erat. Est pellentesque elit ullamcorper dignissim cras. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut eu sem integer vitae justo eget magna.

                       Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,
        EssayAnswerPDF: "",
        DateAndTime: "Mar 22 2023, 14:30pm",
      });
      server.create("underGraduateApplicant", {
        id: nanoid(6),
        FirstName: "Amakye",
        LastName: "Kogi",
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: "",
        YearOfCompletion: "",
        WasscePDF: "",
        EssayQuestion: `          Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,

        EssayAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lectus nulla at volutpat diam ut venenatis tellus. Nisi scelerisque eu ultrices vitae. Nisi est sit amet facilisis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas ultricies mi eget mauris pharetra et. Nam libero justo laoreet sit amet cursus sit amet dictum. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Turpis egestas sed tempus urna. Laoreet non curabitur gravida arcu ac tortor. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Eget arcu dictum varius duis at consectetur lorem donec massa. Commodo elit at imperdiet dui. Eget felis eget nunc lobortis mattis aliquam. Mi in nulla posuere sollicitudin aliquam ultrices. Lobortis mattis aliquam faucibus purus in massa tempor nec. Accumsan lacus vel facilisis volutpat est velit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Risus ultricies tristique nulla aliquet enim. Etiam erat velit scelerisque in dictum non consectetur a erat. Est pellentesque elit ullamcorper dignissim cras. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut eu sem integer vitae justo eget magna.
Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,
        EssayAnswerPDF: "",
        DateAndTime: "Mar 22 2023, 14:30pm",
      });
      server.create("underGraduateApplicant", {
        id: nanoid(6),
        FirstName: "Lord",
        LastName: "Dumbp",
        Email: "seleson@grtg.com",
        Password: "erg5hg676jg54g54g56h67jh",
        UserRole: "Admin",
        Location: "Kumasi",
        DateOfBirth: " 10/21/1231",
        School: "Dadiaso Shs",
        Gender: "Male",
        Phone: "65466464356",
        CurrentUniversity: "",
        YearOfCompletion: "",
        WasscePDF: "",
        EssayQuestion: `          Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,

        EssayAnswer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur. Lectus nulla at volutpat diam ut venenatis tellus. Nisi scelerisque eu ultrices vitae. Nisi est sit amet facilisis. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Maecenas ultricies mi eget mauris pharetra et. Nam libero justo laoreet sit amet cursus sit amet dictum. Accumsan sit amet nulla facilisi morbi tempus iaculis. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Turpis egestas sed tempus urna. Laoreet non curabitur gravida arcu ac tortor. Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
Accumsan in nisl nisi scelerisque eu ultrices vitae auctor eu. Interdum velit euismod in pellentesque massa placerat duis ultricies lacus. Eget arcu dictum varius duis at consectetur lorem donec massa. Commodo elit at imperdiet dui. Eget felis eget nunc lobortis mattis aliquam. Mi in nulla posuere sollicitudin aliquam ultrices. Lobortis mattis aliquam faucibus purus in massa tempor nec. Accumsan lacus vel facilisis volutpat est velit. Venenatis urna cursus eget nunc scelerisque viverra mauris. Risus ultricies tristique nulla aliquet enim. Etiam erat velit scelerisque in dictum non consectetur a erat. Est pellentesque elit ullamcorper dignissim cras. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero. Ut eu sem integer vitae justo eget magna.
Morbi tempus iaculis urna id volutpat. Enim ut sem viverra aliquet eget. Gravida neque convallis a cras semper auctor neque. Augue eget arcu dictum varius duis at consectetur lorem donec. Dolor magna eget est lorem ipsum dolor sit. Iaculis urna id volutpat lacus laoreet non curabitur. Id semper risus in hendrerit gravida rutrum. Leo urna molestie at elementum eu facilisis sed odio. Fames ac turpis egestas integer eget aliquet. Sed nisi lacus sed viverra tellus in hac. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Pulvinar pellentesque habitant morbi tristique senectus.`,
        EssayAnswerPDF: "",
        DateAndTime: "Mar 22 2023, 14:30pm",
      });

      //Seeds for Review Documents
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "1",
        type: "financial aid",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "pending",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "1",
        type: "Honors",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "approved",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "3",
        document_id: "1",
        type: "Activities",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "rejected",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "2",
        document_id: "6",
        type: "recommendation",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "approved",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "4",
        type: "essays",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "rejected",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "3",
        type: "financial aid",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "pending",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "1",
        type: "Honors",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "approved",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "3",
        document_id: "1",
        type: "Activities",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "approved",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "2",
        document_id: "6",
        type: "recommendation",
        date: "Feb 20, 2022",
        deadline: "feb 15, 2016",
        status: "pending",
      });
      server.create("uGReview", {
        id: nanoid(6),
        student_id: "1",
        document_id: "4",
        type: "recommendation",
        date: "Mar 20, 2023",
        deadline: "feb 15, 2016",
        status: "approved",
      });
    },

    //Routes for CRUD here
    routes() {
      

      this.get("/api/users", (schema) => {
        return schema.users.all();
      });

      this.get("/api/underGraduateApplicants", (schema) => {
        return schema.underGraduateApplicants.all();
      });

      this.get("/api/uGReviews", (schema) => {
        return schema.uGReviews.all();
      });
      //Find specific GET with id

      this.get("/api/users/:id", (schema, request) => {
        let id = request.params.id;

        return schema.users.find(id);
      });

      this.get("/api/underGraduateApplicants/:id", (schema, request) => {
        let id = request.params.id;

        return schema.underGraduateApplicants.find(id);
      });

      //ALL POST REQUEST
      this.post("/api/honors", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.honors.create(attrs);
      });
    },
  });
}
