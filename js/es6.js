{
  "use strict";
/*
 * Complete the TODO items below
 */
    const users = [
      {
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash']
      },
      {
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript']
      },
      {
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php']
      },
      {
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql']
      },
      {
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php']
      }
    ];


// =============================================================DONE
// TODO: fill in your name and email and add some programming languages you know to the languages array
// TODO: replace the `var` keyword with `const`, then try to reassign a variable declared as `const`
      const name = 'Pao Gomez';
      const email = 'pao_gomez1@hotmail.com';
      const languages = ['java', 'scala', 'php'];

// =============================================================DONE
// // TODO: rewrite the object literal using object property shorthand
      users.push({
        name: name,
        email: email,
        languages: languages
      });

        console.log(users);




// =============================================================DONE
// // TODO: replace `var` with `let` in the following variable declarations
//   let emails = [];
//   let names = [];

    // =============================================================
// // TODO: rewrite the following using arrow functions

    // ES5 version
  // users.forEach(function(user) {
  //   return emails.push(user.email);
  // });

  // ES6 version
  // for (let user of users) {
  //     emails.push(user.email);
  // };


  // ES5 version
  // users.forEach(function(user) {
  //   return names.push(user.name);
  // });

  // ES6 version
  // for (let name of names) {
  //     names.push(user.name);
  // };


// TODO: replace `var` with `let` in the following declaration
// TODO: rewrite the code below to use object destructuring assignment note that you can also use destructuring assignment in the function parameter definition
// TODO: rewrite the assignment below to use template strings
//     let developers = [];
//     users.forEach(function(user) {
//       const name = user.name;
//       const email = user.email;
//       const languages = user.languages;
//       developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
//     });


    // for (let user of users) {
    //     const name = user.name;
    //     const email = user.email;
    //     const languages = user.languages;
    //
    //     developers.push(${name} `s email is` ${email} ${name} `knows` ${languages.join(', ')});
    // };
//

//
// // TODO: Use `let` for the following variable
//     let list = '<ul>';
//
// // TODO: rewrite the following loop to use a for..of loop // TODO: rewrite the assignment below to use template strings
//     developers.forEach(function (developer) {
//         list += '<li>' + developer + '</li>';
//     });
//     list += '</ul>';
}