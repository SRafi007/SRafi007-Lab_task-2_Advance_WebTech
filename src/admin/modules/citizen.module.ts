import{Module} from "@nestjs/common";
import { LoginService } from "src/Common/login.service";
import { CitizenController } from "../controllers/citizen.controller";
import { AdminService } from "../services/citizen.service";
@Module({
    imports: [],
    controllers:[CitizenController],
    providers:[AdminService,LoginService]
})
export class CitizenModule {}