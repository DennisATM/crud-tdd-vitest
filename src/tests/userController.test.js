import {describe, expect, it, vi, beforeEach} from 'vitest';
import { User } from '../models/user.model.js';
import { createUser } from '../controllers/user.controller.js';

describe('Creando Usuario', () => {
    beforeEach(() => {
        vi.clearAllMocks()
    });

    it('El modelo Usuario debe estár definido e importado', () =>{
        expect(User).toBeDefined();
    }),
    it('debe existir la función createUser',()=>{
        expect(typeof createUser).toBe('function')
    })
});