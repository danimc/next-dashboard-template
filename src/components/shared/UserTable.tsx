const UserTable = () => {

    const user = [
      { id: 1, name: "Erick", age: 23, country: "México" },
      { id: 2, name: "Luis", age: 28, country: "Chile" },
      { id: 3, name: "Ana", age: 30, country: "Perú" },
      { id: 4, name: "Johnny", age: 23, country: "Inglaterra" },
    ];

    return (
        <table className="table min-w-full text-center text-sm ">
        <thead >
          <tr className="border-y border-gray-400">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">NOMBRE</th>
            <th className="px-4 py-2">EDAD</th>
            <th className="px-4 py-2">PAIS</th>
          </tr>
        </thead>
        <tbody>

          {user.map((persona) => (
            <tr key={persona.id} className="border-y border-gray-400">
              <td className="px-4 py-2">{persona.id}</td>
              <td className="px-4 py-2">{persona.name}</td>
              <td className="px-4 py-2">{persona.age}</td>
              <td className="px-4 py-2">{persona.country}</td>
            </tr>
            ))
          }

        </tbody>
      </table>
    )
}

export default UserTable