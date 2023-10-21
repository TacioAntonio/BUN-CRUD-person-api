import PERSONS from "../../utils/fake_data";
import { generateRandomID, isValidEmail } from "../../utils/functions";

class PersonsController {
    getAll() {
        return PERSONS;
    }

    getById({ params: { id } }: any) {
        const currentPerson = PERSONS.filter(({ Id }) => Id === id)[0];

        if (!currentPerson) return new Response(JSON.stringify({ message: "Person not found" }));

        return currentPerson;
    }

    create({ body }: any) {
        const { Avatar, Firstname, Lastname, Email, Age } = body;

        if (Avatar == "") {
            return new Response(JSON.stringify({ message: "Avatar is a required field" }));
        }

        if (Firstname == "") {
            return new Response(JSON.stringify({ message: "Firstname is a required field" }));
        }

        if (Lastname == "") {
            return new Response(JSON.stringify({ message: "Lastname is a required field" }));
        }

        if (Email == "") {
            return new Response(JSON.stringify({ message: "Email is a required field" }));
        }
        
        if (!isValidEmail(Email)) {
            return new Response(JSON.stringify({ message: "Email is invalid" }));
        }

        if (Age <= 0 || Age > 120) {
            return new Response(JSON.stringify({ message: "The Age field must be greater than 0 and less than or equal to 120" }));
        }

        PERSONS.push({ Id: generateRandomID(), ...body });
        return new Response(JSON.stringify({ message: "Stored successfully!" }));
    }

    update({ body, params: { id } }: any) {
        const { Avatar, Firstname, Lastname, Email, Age } = body;
        
        const indexToUpdate = PERSONS.findIndex(({ Id }) => Id === id);

        if (indexToUpdate == -1) { return new Response(JSON.stringify({ message: "Person not found" })); }

        if (Avatar == "") {
            return new Response(JSON.stringify({ message: "Avatar is a required field" }));
        }

        if (Firstname == "") {
            return new Response(JSON.stringify({ message: "Firstname is a required field" }));
        }

        if (Lastname == "") {
            return new Response(JSON.stringify({ message: "Lastname is a required field" }));
        }

        if (Email == "") {
            return new Response(JSON.stringify({ message: "Email is a required field" }));
        }
        
        if (!isValidEmail(Email)) {
            return new Response(JSON.stringify({ message: "Email is invalid" }));
        }

        if (Age <= 0 || Age > 120) {
            return new Response(JSON.stringify({ message: "The Age field must be greater than 0 and less than or equal to 120" }));
        }

        PERSONS[indexToUpdate] = { Id: id, ...body };

        return new Response(JSON.stringify({ message: "Person updated successfully!" }));
    }

    delete({ params: { id } }: any) {
        const newPersons = PERSONS.filter(({ Id }) => Id !== id);
        PERSONS.length = 0;
        PERSONS.push(...newPersons);

        return new Response(JSON.stringify({ message: "Person deleted successfully!" }));
    }
}

export default new PersonsController();