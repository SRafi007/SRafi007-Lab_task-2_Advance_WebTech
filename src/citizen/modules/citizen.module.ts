import{Module} from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LoginService } from "src/Common/login.service";
import { Citizen } from "src/entities/citizens.entity";
import { CitizenController } from "../controllers/citizen.controller";
import { CitizenService } from "../services/citizen.service";
@Module({
    imports: [TypeOrmModule.forFeature([Citizen])],
    controllers:[CitizenController],
    providers:[CitizenService,LoginService]
})
export class CitizenModule {}