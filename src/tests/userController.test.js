import { describe, expect, it, vi, beforeEach } from "vitest";
import { User } from "../models/user.model.js";
import { createUser } from "../controllers/user.controller.js";

vi.mock('../models/user.model.js', () => ({
  User: {
    create: vi.fn()
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