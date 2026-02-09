import React, { useState } from "react";
import { FaUserShield, FaKey, FaPlus, FaEdit, FaTrash, FaSearch, FaTimes } from "react-icons/fa";

const AccessPage = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Full Access", "Manage Users", "Manage Hostels"] },
    { id: 2, name: "Teacher", permissions: ["View Students", "Manage Classes"] },
    { id: 3, name: "Student", permissions: ["View Own Profile", "Access Courses"] },
    { id: 4, name: "Accountant", permissions: ["View Finance", "Manage Fees"] },
  ]);

  const [search, setSearch] = useState("");
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);

  const [newRoleName, setNewRoleName] = useState("");
  const [newPermissions, setNewPermissions] = useState("");

  // Filter roles based on search
  const filteredRoles = roles.filter(role =>
    role.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add role
  const handleAddRole = () => {
    if (!newRoleName) return;
    const permissionsArray = newPermissions.split(",").map(p => p.trim());
    const newRole = { id: Date.now(), name: newRoleName, permissions: permissionsArray };
    setRoles([...roles, newRole]);
    setNewRoleName("");
    setNewPermissions("");
    setShowAddModal(false);
  };

  // Edit role
  const handleEditRole = () => {
    if (!currentRole) return;
    const updatedRoles = roles.map(role =>
      role.id === currentRole.id
        ? { ...role, name: currentRole.name, permissions: currentRole.permissions.split(",").map(p => p.trim()) }
        : role
    );
    setRoles(updatedRoles);
    setCurrentRole(null);
    setShowEditModal(false);
  };

  // Delete role
  const handleDeleteRole = (id) => {
    setRoles(roles.filter(role => role.id !== id));
  };

  return (
    <div className="flex-1 p-6 bg-gradient-to-r from-gray-50 to-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#003566] mb-2">Access Control</h1>
          <p className="text-gray-700">Manage system roles, permissions, and secure access levels.</p>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search Roles..."
            className="px-3 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl flex items-center gap-1"
            onClick={() => setShowAddModal(true)}
          >
            <FaPlus /> Add Role
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <h2 className="text-gray-600 font-semibold">Total Roles</h2>
            <p className="text-2xl font-bold text-blue-500">{roles.length}</p>
          </div>
          <FaUserShield className="text-3xl text-blue-500" />
        </div>

        <div className="bg-white p-4 rounded-2xl shadow flex items-center justify-between">
          <div>
            <h2 className="text-gray-600 font-semibold">Total Permissions</h2>
            <p className="text-2xl font-bold text-green-500">
              {roles.reduce((sum, role) => sum + role.permissions.length, 0)}
            </p>
          </div>
          <FaKey className="text-3xl text-green-500" />
        </div>
      </div>

      {/* Roles Table */}
      <div className="bg-white p-6 rounded-2xl shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Role</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">Permissions</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredRoles.map((role) => (
              <tr key={role.id}>
                <td className="px-4 py-2 text-gray-800 font-semibold">{role.name}</td>
                <td className="px-4 py-2 text-gray-700">{role.permissions.join(", ")}</td>
                <td className="px-4 py-2 text-center space-x-2">
                  <button
                    className="text-blue-500 hover:text-blue-700"
                    onClick={() => {
                      setCurrentRole({ ...role, permissions: role.permissions.join(", ") });
                      setShowEditModal(true);
                    }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => handleDeleteRole(role.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Role Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowAddModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Add Role</h2>
            <input
              type="text"
              placeholder="Role Name"
              className="w-full mb-3 px-3 py-2 rounded-xl border border-gray-300"
              value={newRoleName}
              onChange={(e) => setNewRoleName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Permissions (comma separated)"
              className="w-full mb-3 px-3 py-2 rounded-xl border border-gray-300"
              value={newPermissions}
              onChange={(e) => setNewPermissions(e.target.value)}
            />
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl w-full"
              onClick={handleAddRole}
            >
              Add Role
            </button>
          </div>
        </div>
      )}

      {/* Edit Role Modal */}
      {showEditModal && currentRole && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-3xl w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              onClick={() => setShowEditModal(false)}
            >
              <FaTimes />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Role</h2>
            <input
              type="text"
              placeholder="Role Name"
              className="w-full mb-3 px-3 py-2 rounded-xl border border-gray-300"
              value={currentRole.name}
              onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Permissions (comma separated)"
              className="w-full mb-3 px-3 py-2 rounded-xl border border-gray-300"
              value={currentRole.permissions}
              onChange={(e) => setCurrentRole({ ...currentRole, permissions: e.target.value })}
            />
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl w-full"
              onClick={handleEditRole}
            >
              Save Changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccessPage;
