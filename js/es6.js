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
      const languages = ['javascript', 'jquery', 'es6'];

// =============================================================DONE
// // TODO: rewrite the object literal using object property shorthand
//       users.push({
//         name: name,
//         email: email,
//         languages: languages
//       });

    users.push({name, email, languages});
    console.log(users);




// =============================================================DONE
// // TODO: replace `var` with `let` in the following variable declarations
  let emails = [];
  let names = [];

    // ============================================================= DONE
// // TODO: rewrite the following using arrow functions

    // ES5 version
  // users.forEach(function(user) {
  //   return emails.push(user.email);
  // });

  // ES6 version
  users.forEach(user => {return emails.push(user.email)});
  console.log(emails);



  // ES5 version
  // users.forEach(function(user) {
  //   return names.push(user.name);
  // });

  // ES6 version
    users.forEach(user => {return names.push(user.name)});
    console.log(names);



// TODO: replace `var` with `let` in the following declaration
// TODO: rewrite the code below to use object destructuring assignment note that you can also use destructuring assignment in the function parameter definition
// TODO: rewrite the assignment below to use template strings
    let developers = [];

    // users.forEach(function(user) {
    //   const name = user.name;
    //   const email = user.email;
    //   const languages = user.languages;
    //   developers.push(name + '\'s email is ' + email + name + ' knows ' + languages.join(', '));
    // });
    // console.log(developers);


    users.forEach(({name, email, languages}) => {
        developers.push(`${name}'s email is ${email} ${name} knows ${languages.join(', ')}`);
    });
    console.log(developers);



// =============================================================DONE
// // TODO: Use `let` for the following variable
    let list = '<ul>';

    // =============================================================DONE
// // TODO: rewrite the following loop to use a for..of loop
//     developers.forEach(function (developer) {
//         list += '<li>' + developer + '</li>';
//     });


    for (let developer of developers) {
        list += '<li>' + developer + '</li>';
    };



    // =============================================================DONE
    // TODO: rewrite the assignment below to use template strings
    list += '</ul>';
    document.body.innerHTML = list;



}