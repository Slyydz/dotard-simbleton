import { BusinessList } from "./BusinessList.js";
import {useBusinesses} from "./BusinessData.js"
import {businessNY} from "./BusinessData.js"
import {AgentList} from "./BusinessList.js"


console.log(businessNY());
BusinessList();

const businessArray = useBusinesses();


AgentList();





