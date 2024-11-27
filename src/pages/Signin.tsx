import { Input } from '../components/Input';
import { Button } from '../components/Button';

export function Signin() {
    return (
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
            <div className="bg-white p-8 rounded-md border-gray-300 max-w-72 border shadow-md min-h-48 min-w-72">
                <div className="flex flex-col space-y-4 pt-3">
                    <Input placeholder="Username or Email" />
                    <Input placeholder="Password" />
                </div>

                <div className="flex justify-center pt-6">
                    <Button
                        variant="primary"
                        text="Signin"
                        fullWidth={true}
                        loading={false}
                    />
                </div>
            </div>
        </div>
    );
}
