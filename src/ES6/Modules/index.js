// Default -> import ...   from ''
// Named   -> import {...} from ''

import Teacher, { promote } from "./Teacher";

export const teacher = new Teacher("William", "SW Eng");
teacher.teach();
