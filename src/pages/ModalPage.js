import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button primary onClick={handleClose}>I accept</Button>
        </div>
    );
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an import agreement for you to accept
        </p>
    </Modal>

    return (
        <div>
            <Button primary onClick={handleClick}>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pulvinar tortor sed venenatis cursus. Praesent id magna luctus, aliquam massa vel, bibendum felis. Maecenas nulla ante, auctor vel ornare nec, auctor eu lectus. Nunc aliquam blandit lectus, eu molestie diam tempus eget. Donec imperdiet turpis in nunc condimentum, viverra ultricies lacus hendrerit. Vivamus consectetur, nulla nec bibendum viverra, erat erat accumsan neque, vel fermentum magna neque in nibh. Praesent vel tellus at purus venenatis ultrices quis sit amet nulla. Integer varius libero nunc, at aliquam magna vulputate ac. Integer vehicula nisi ac ex maximus vulputate.
            </p>
        </div>
    );
};

export default ModalPage;