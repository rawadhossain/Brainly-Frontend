import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { useRef } from 'react';
import { BACKEND_URL } from '../config';
import axios from 'axios';

export function Signup() {
    const usernameRef = useRef<any>(); //generics
    const passwordRef = useRef<any>();

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        await axios.post(`${BACKEND_URL}/api/v1/signup`, {
            data: {
                username,
                password,
            },
        });

        return (
            <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
                <div className="bg-white p-8 rounded-md border-gray-300 max-w-72 border shadow-md min-h-48 min-w-72">
                    <div className="flex flex-col space-y-4 pt-3">
                        <Input
                            ref={usernameRef}
                            placeholder="Username or Email"
                        />
                        <Input ref={passwordRef} placeholder="Password" />
                    </div>

                    <div className="flex justify-center pt-6">
                        <Button
                            onClick={signup}
                            variant="primary"
                            text="Sign Up"
                            fullWidth={true}
                            loading={false}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
