import PropTypes from 'prop-types';

Campaing.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    amountEmails: PropTypes.number.isRequired,
    remove: PropTypes.func.isRequired,
};

export default function Campaing({ title, description, amountEmails, remove }) {
    return (
        <div className="container">
            <input type="text" name="title" id="title" value={title} readOnly />
            <input type="text" name="description" id="description" value={description} readOnly />
            <input type="text" name="amountEmails" id="amountEmails" value={amountEmails} readOnly />
            <input type="button" value="Excluir" onClick={remove} />
        </div>
    );
}
