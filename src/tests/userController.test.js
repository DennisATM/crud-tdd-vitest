import { describe, expect, it, vi, beforeEach } from "vitest";
import { User } from "../models/user.model.js";
import { createUser, getUserById, updateUser } from "../controllers/user.controller.js";

vi.mock('../models/user.model.js', () => ({
  User: {
    create: vi.fn(),
    findByPk: vi.fn(),
    update: vi.fn()
  }
}));

describe('createUser', () => {
  beforeEach(() => {
    vi.clearAllMocks(); // limpieza de mocks entre pruebas
  });
  it('el modelo User está definido',() => {
    expect(User).toBeDefined()
  })
  
  it('debería estar definida como función', () => {
    expect(createUser).toBeTypeOf('function');
  })

  it('debería crear un usuario correctamente', async () => {
    const mockUser = {
      firstName: 'Dennis',
      lastName: 'Torres',
      email: 'dennis@example.com',
      password: '123456'
    };

    User.create.mockResolvedValue(mockUser);

    const req = { body: mockUser };
    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    await createUser(req, res);

    expect(User.create).toHaveBeenCalledWith(mockUser);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Usuario creado con éxito',
      status: 201,
      data: mockUser
    });
  });

  it('debería retornar 500 si ocurre un error', async () => {
    User.create.mockRejectedValue(new Error('DB Error'));

    const req = {
      body: {
        firstName: 'Dennis',
        lastName: 'Torres',
        email: 'dennis@example.com',
        password: '123456'
      }
    };

    const res = {
      status: vi.fn().mockReturnThis(),
      json: vi.fn()
    };

    await createUser(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Error al crear Usuario',
      status: 500,
      data: null
    });
  });
});

describe('getUserById',()=> {
    beforeEach(()=> {
        vi.clearAllMocks();
    })

    it('debería estar definida la función', () =>{
        expect(getUserById).toBeDefined(); 
    }),
    it('debería obtener un usuario por Id y devolver 200', async () => {
        const mockUser = {
            id:1,
            firstName:'Dennis',
            lastName:'Torres',
            email:'dennis@example.com',
            password:'123456'
        }

        User.findByPk.mockResolvedValue(mockUser);
        const req = {params: { id: 1 }};
        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        }

        await getUserById(req, res);

        expect(User.findByPk).toHaveBeenCalledWith(1);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Usuario obtenido con éxito',
            status: 200,
            data: mockUser
        })
    })
});

describe('updateUser', ()=> {

    beforeEach(() => {
        vi.clearAllMocks();    
    })

    it('la función debe estar definida', () => {
        expect(updateUser).toBeDefined();
    })

    it('debería actualizar un usuario y devolver status 200', async () => {
        const mockUpdateData = {
            firstName: 'NuevoNombre',
            lastName: 'ApellidoActualizado',
        };

        const req = {
            params: { id: '1' },
            body: mockUpdateData
        };

        const res = {
            status: vi.fn().mockReturnThis(),
            json: vi.fn()
        };

        User.update.mockResolvedValue([1]); // Sequelize devuelve [1] si actualizó 1 registro

        await updateUser(req, res);

        expect(User.update).toHaveBeenCalledWith(mockUpdateData, { where: { id: 1 } });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({
            message: 'Usuario actualizado con éxito',
            status: 200
        });
    });

});

describe('deleteUser', () => {
    it('la función debe estar definida', () => {
        expect(deleteUser).toBeDefined();
    })
})