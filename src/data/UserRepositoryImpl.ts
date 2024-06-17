import UserRepository from "./UserRepository";

class UserRepositoryImpl implements UserRepository {

    private userNameStub: string = "Stubbed Name"

    getUserName(): string {
        return this.userNameStub
    }
}

export default UserRepositoryImpl;