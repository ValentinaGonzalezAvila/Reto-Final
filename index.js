const db = firebase.firestore();

const taskForm = document.getElementById("task-form");
const tasksContainer = document.getElementById("tasks-container");
const taskForm2 = document.getElementById("task-form2");
const tasksContainer2 = document.getElementById("tasks-container2");
const taskForm3 = document.getElementById("task-form3");
const tasksContainer3 = document.getElementById("tasks-container3");

let editStatus = false;
let id = '';
let id2 = '';
let id3 = '';

/**
 * Save a New Task in Firestore
 * @param {string} title the title of the Task
 * @param {string} description the description of the Task
 */
const saveTask = (title, description) =>
  db.collection("tasks").doc().set({
    title,
    description,
  });

const getTasks = () => db.collection("tasks").get();

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

const deleteTask = (id) => db.collection("tasks").doc(id).delete();

const getTask = (id) => db.collection("tasks").doc(id).get();

const updateTask = (id, updatedTask) => db.collection('tasks').doc(id).update(updatedTask);

window.addEventListener("DOMContentLoaded", async (e) => {
  onGetTasks((querySnapshot) => {
    tasksContainer.innerHTML = "";

    querySnapshot.forEach((doc) => {
      const task = doc.data();

      tasksContainer.innerHTML += `<div class="card card-body mt-2 border-primary">
    <h3 class="h5">${task.title}</h3>
    <p>${task.description}</p>
    <div>
      <button class="btn btn-primary btn-delete" data-id="${doc.id}">
        🗑 Delete
      </button>
      <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
        🖉 Edit
      </button>
    </div>
  </div>`;
    });

    const btnsDelete = tasksContainer.querySelectorAll(".btn-delete");
    btnsDelete.forEach((btn) =>
      btn.addEventListener("click", async (e) => {
        console.log(e.target.dataset.id);
        try {
          await deleteTask(e.target.dataset.id);
        } catch (error) {
          console.log(error);
        }
      })
    );

    const btnsEdit = tasksContainer.querySelectorAll(".btn-edit");
    btnsEdit.forEach((btn) => {
      btn.addEventListener("click", async (e) => {
        try {
          const doc = await getTask(e.target.dataset.id);
          const task = doc.data();
          taskForm["task-title"].value = task.title;
          taskForm["task-description"].value = task.description;

          editStatus = true;
          id = doc.id;
          taskForm["btn-task-form"].innerText = "Actualizar";

        } catch (error) {
          console.log(error);
        }
      });
    });
  });
});

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = taskForm["task-title"];
  const description = taskForm["task-description"];

  try {
    if (!editStatus) {
      await saveTask(title.value, description.value);
    } else {
      await updateTask(id, {
        title: title.value,
        description: description.value,
      })

      editStatus = false;
      id = '';
      taskForm['btn-task-form'].innerText = 'Guardar';
    }

    taskForm.reset();
    title.focus();
  } catch (error) {
    console.log(error);
  }
});

/**
 * Save a New Task in Firestore
 * @param {string} title2 the title of the Task
 * @param {string} description2 the description of the Task
 */
 const saveTask = (title2, description2) =>
 db.collection("tasks").doc().set({
   title2,
   description2,
 });

const getTasks = () => db.collection("tasks").get();

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

const deleteTask = (id2) => db.collection("tasks").doc(id2).delete();

const getTask = (id2) => db.collection("tasks").doc(id2).get();

const updateTask = (id2, updatedTask) => db.collection('tasks').doc(id2).update(updatedTask);

window.addEventListener("DOMContentLoaded", async (e) => {
 onGetTasks((querySnapshot2) => {
   tasksContainer2.innerHTML = "";

   querySnapshot2.forEach((doc2) => {
     const task2 = doc2.data();

     tasksContainer2.innerHTML += `<div class="card card-body mt-2 border-primary">
   <h3 class="h5">${task2.title2}</h3>
   <p>${task2.description2}</p>
   <div>
     <button class="btn btn-primary btn-delete" data-id="${doc2.id2}">
       🗑 Delete
     </button>
     <button class="btn btn-secondary btn-edit" data-id="${doc2.id2}">
       🖉 Edit
     </button>
   </div>
 </div>`;
   });

   const btnsDelete2 = tasksContainer2.querySelectorAll(".btn-delete2");
   btnsDelete2.forEach((btn2) =>
     btn2.addEventListener("click", async (e) => {
       console.log(e.target.dataset.id2);
       try {
         await deleteTask(e.target.dataset.id2);
       } catch (error) {
         console.log(error);
       }
     })
   );

   const btnsEdit2 = tasksContainer2.querySelectorAll(".btn-edit");
   btnsEdit2.forEach((btn2) => {
     btn2.addEventListener("click", async (e) => {
       try {
         const doc2 = await getTask(e.target.dataset.id);
         const task2 = doc2.data();
         taskForm2["task-title"].value = task2.title;
         taskForm2["task-description"].value = task2.description;

         editStatus = true;
         id2 = doc2.id;
         taskForm2["btn-task-form2"].innerText = "Actualizar";

       } catch (error) {
         console.log(error);
       }
     });
   });
 });
});

taskForm2.addEventListener("submit", async (e) => {
 e.preventDefault();

 const title2 = taskForm2["task-title2"];
 const description2 = taskForm2["task-description2"];

 try {
   if (!editStatus) {
     await saveTask(title2.value, description2.value);
   } else {
     await updateTask(id2, {
       title2: title2.value,
       description2: description2.value,
     })

     editStatus = false;
     id2 = '';
     taskForm2['btn-task-form2'].innerText = 'Guardar';
   }

   taskForm2.reset();
   title2.focus();
 } catch (error) {
   console.log(error);
 }
});

taskForm2.addEventListener("submit", async (e) => {
 e.preventDefault();

 const title2 = taskForm2["task-title2"];
 const description2 = taskForm2["task-description2"];

 try {
   if (!editStatus) {
     await saveTask(title2.value, description2.value);
   } else {
     await updateTask(id2, {
       title2: title2.value,
       description2: description2.value,
     })

     editStatus = false;
     id2 = '';
     taskForm2['btn-task-form2'].innerText = 'Guardar';
   }

   taskForm2.reset();
   title2.focus();
 } catch (error) {
   console.log(error);
 }
});

/**
 * Save a New Task in Firestore
 * @param {string} title3 the title of the Task
 * @param {string} description3 the description of the Task
 */
 const saveTask = (title3, description3) =>
 db.collection("tasks").doc().set({
   title3,
   description3,
 });

const getTasks = () => db.collection("tasks").get();

const onGetTasks = (callback) => db.collection("tasks").onSnapshot(callback);

const deleteTask = (id3) => db.collection("tasks").doc(id3).delete();

const getTask = (id3) => db.collection("tasks").doc(id3).get();

const updateTask = (id3, updatedTask) => db.collection('tasks').doc(id3).update(updatedTask);

window.addEventListener("DOMContentLoaded", async (e) => {
 onGetTasks((querySnapshot3) => {
   tasksContainer3.innerHTML = "";

   querySnapshot3.forEach((doc3) => {
     const task3 = doc3.data();

     tasksContainer2.innerHTML += `<div class="card card-body mt-2 border-primary">
   <h3 class="h5">${task3.title3}</h3>
   <p>${task3.description3}</p>
   <div>
     <button class="btn btn-primary btn-delete" data-id="${doc3.id3}">
       🗑 Delete
     </button>
     <button class="btn btn-secondary btn-edit" data-id="${doc3.id3}">
       🖉 Edit
     </button>
   </div>
 </div>`;
   });

   const btnsDelete3 = tasksContainer3.querySelectorAll(".btn-delete3");
   btnsDelete3.forEach((btn3) =>
     btn3.addEventListener("click", async (e) => {
       console.log(e.target.dataset.id3);
       try {
         await deleteTask(e.target.dataset.id3);
       } catch (error) {
         console.log(error);
       }
     })
   );

   const btnsEdit3 = tasksContainer3.querySelectorAll(".btn-edit");
   btnsEdit3.forEach((btn3) => {
     btn3.addEventListener("click", async (e) => {
       try {
         const doc3 = await getTask(e.target.dataset.id3);
         const task3 = doc3.data();
         taskForm3["task-title3"].value = task3.title3;
         taskForm3["task-description3"].value = task3.description3;

         editStatus = true;
         id3 = doc3.id3;
         taskForm3["btn-task-form3"].innerText = "Actualizar";

       } catch (error) {
         console.log(error);
       }
     });
   });
 });
});

taskForm2.addEventListener("submit", async (e) => {
 e.preventDefault();

 const title3 = taskForm3["task-title3"];
 const description3 = taskForm3["task-description3"];

 try {
   if (!editStatus) {
     await saveTask(title3.value, description3.value);
   } else {
     await updateTask(id, {
       title3: title3.value,
       description3: description3.value,
     })

     editStatus = false;
     id3 = '';
     taskForm3['btn-task-form3'].innerText = 'Guardar';
   }

   taskForm3.reset();
   title3.focus();
 } catch (error) {
   console.log(error);
 }
});

taskForm3.addEventListener("submit", async (e) => {
 e.preventDefault();

 const title3 = taskForm3["task-title3"];
 const description3 = taskForm3["task-description3"];

 try {
   if (!editStatus) {
     await saveTask(title3.value, description3.value);
   } else {
     await updateTask(id3, {
       title3: title3.value,
       description3: description3.value,
     })

     editStatus = false;
     id3 = '';
     taskForm3['btn-task-form3'].innerText = 'Guardar';
   }

   taskForm3.reset();
   title3.focus();
 } catch (error) {
   console.log(error);
 }
});
