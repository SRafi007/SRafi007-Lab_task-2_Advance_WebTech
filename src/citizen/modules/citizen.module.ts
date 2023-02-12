import{Module} from "@nestjs/common";
import { LoginService } from "src/Common/login.service";
import { CitizenController } from "../controllers/citizen.controller";
import { CitizenService } from "../services/citizen.service";
@Module({
    imports: [],
    controllers:[CitizenController],
    providers:[CitizenService,LoginService]
})
export class CitizenModule {}