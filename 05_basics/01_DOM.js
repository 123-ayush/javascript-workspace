// ----------------------------------------------DOM-----------------------------------------------------------

/*

DOM(Document Object Model) -> represents a document with a logical tree. it allows us to manipulate/change webpage content.

*/


// --------------------------------------------Element Selection-----------------------------------------------

// 1. getElementById -> return the element as a object or null(if not found).

// 2. getElementByClassName -> return the element as html collection or empty collection(if not found).

// 3. getElementByTagName -> return the element as html collection or empty collection(if not found).

// 4. querySelector -> allow to use any css selector.

    // document.querySelector('p') -> select first p element
    // document.querySelector('#myId') -> select first element with id = myid
    // document.querySelector('.myclass') -> select first element with class = myclass
    // document.querySelectorAll("p") -> select all p elements


// -------------------------------Properties and Methods-----------------------------------------------------

        // --------------------------To change content---------------------------------

// 1. innerText -> shows visible text on the page showing when we do go live.

// 2. textContent -> show all the full text written in the html file.

// 3. innerHTML -> show full markup

        // -------------------------To change attributes------------------------------

// 4. obj.getAttribut(attr) -> use to get any attribute value of obj

// 5. obj.setAttribut(attr, val) -> use to set any attribut a new val or add a new attribute

        //--------------------------To change style----------------------------------

// 6. obj.style ->used to chnage styling of different objects. it only works on inline css like if we do console.dir() then if we have done inline css then only we can see the values otherwise empty.

// 7. obj.classList
    //a. classList.add()
    //b. classList.remove()
    //c. classList.contains()
    //d. classList.toggle()


        //----------------------------Navigation On Page----------------------------

// 8. parentElement

// 9. children
    //a. childElementCount

// 10. previousElementSibling/nextElementSibling


        //----------------------------Adding new element---------------------------

// 11. document.createElement('ele_name');
    //a. obj.appendChild('ele_name') -> append new elemnt at the end of obj
    //b. obj.append('ele_name') -> add some text or string or btn anything in obj
    //c. obj.prepend('ele_name') -> add some ele at the starting of obj
    //d. obj.insertAdjacentElement(where, 'ele_name') -> add elemnt in between somewhere
        //i. beforebegin
        //ii. afterbegin
        //iii. beforeend
        //iv. afterend


        //------------------------Removing Element----------------------------------

// 12. obj.removeChild('ele_name') -> opposite to appendElement
// 13. obj.remove() -> opposite to append



