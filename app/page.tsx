"use client";

import { Progress, TimeDisplay } from "@/src/clock";
import { Banner } from "@/src/components/Banner";
import { Center } from "@/src/components/Center";
import { useEffect, useState } from "react";


const Home = () => {
    const [time, setTime] = useState<Date>(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Center>
            <Banner>
                <TimeDisplay time={time} />
                <Progress time={time} />
            </Banner>
        </Center>
    );
};

export default Home;