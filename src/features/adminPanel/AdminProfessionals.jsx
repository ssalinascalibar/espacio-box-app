import { useState } from "react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import {
  FaRegEdit,
  FaRegTrashAlt,
} from "../../assets/icons/icons";
import CreateProfessionalModal from "../../shared/components/modals/CreateProfessionalModal";
import UpdateProfessionalModal from "../../shared/components/modals/UpdateProfessionalModal";
import "./adminPanel.css";

export default function AdminProfessionals({ professionals, setProfessionals }) {
  
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const [selectedProfessional, setSelectedProfessional] = useState({});

  const handleCloseUpdateModal = () => setShowUpdateModal(false);
  const handleShowUpdateModal = () => setShowUpdateModal(true);
  const handleCloseCreateModal = () => setShowCreateModal(false);
  const handleShowCreateModal = () => setShowCreateModal(true);

  const deleteProfessional = async (id) => {
    try {
      setProfessionals(
        professionals.filter((p) => {
          return p.id !== id;
        })
      );
    } catch (error) {
      console.error("Error al eliminar el profesional:", error.message);
    }
  };

  const selectProfessional = async (selection) => {
    setSelectedProfessional(selection);
  };

  return (
    <div id="background-admin">
      <div id="table-title">
        <h2>Tabla de profesionales</h2>
        <Button
          variant="success"
          onClick={handleShowCreateModal}
          className="mb-4"
        >
          Agregar profesional
        </Button>
      </div>
      <div id="admin-table">
        <Table striped>
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Apellido paterno</th>
              <th>Apellido materno</th>
              <th>Rut</th>
              <th>Fono</th>
              <th>Email</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Valor hora</th>
              <th>Clave acceso</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {professionals.map((p, i) => (
              <tr key={i}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.paternal_surname}</td>
                <td>{p.maternal_surname}</td>
                <td>{p.rut}</td>
                <td>{p.phone}</td>
                <td>{p.email}</td>
                <td>{p.title}</td>
                <td>
                  <div className="custom-cell-content">{p.text}</div>
                </td>
                <td>{p.hourly_rate}</td>
                <td>{p.password}</td>
                <td>
                  <img
                    src={p.image}
                    alt="Imagen"
                    className="responsive-image"
                  />
                </td>
                <td>
                  <div id="actions">
                    {/* <MdAddCircleOutline /> */}
                    <FaRegEdit
                      onClick={() => {
                        selectProfessional(p);
                        handleShowUpdateModal();
                      }}
                    />
                    <FaRegTrashAlt onClick={() => deleteProfessional(p.id)} />
                  </div>
                </td>
              </tr>
            ))}
            <CreateProfessionalModal
              show={showCreateModal}
              handleClose={handleCloseCreateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
            />
            <UpdateProfessionalModal
              show={showUpdateModal}
              handleClose={handleCloseUpdateModal}
              professionals={professionals}
              setProfessionals={setProfessionals}
              selectedProfessional={selectedProfessional}
              setSelectedProfessional={setSelectedProfessional}
            />
          </tbody>
        </Table>
      </div>
    </div>
  );
}
