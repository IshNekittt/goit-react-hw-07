import s from "./Contact.module.css";
import { FaUserLarge } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { deleteContact } from "../../redux/contactsOps";
import { useDispatch } from "react-redux";

export default function Contact({ name, number, id }) {
  const dispatch = useDispatch();
  return (
    <li className={s.listItem}>
      <div>
        <p className={s.infoItem}>
          <FaUserLarge />
          {name}
        </p>
        <p className={s.infoItem}>
          <FaPhoneAlt />
          {number}
        </p>
      </div>
      <button
        className={s.deleteBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
}
