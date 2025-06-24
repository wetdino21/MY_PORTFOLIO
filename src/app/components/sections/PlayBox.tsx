
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
    IconFileBroken,
    IconQuestionMark,
    IconSignature,
    IconTableColumn,
    IconWaveSawTool,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { pacifico, roboto_mono, roboto_condensed } from "@/styles/fonts";
import { GiMusicalNotes, GiFishbone } from "react-icons/gi";
import { LuDownload, LuEraser, LuPen, LuFileMusic, LuMusic } from "react-icons/lu";
import { MiniPlayer } from "@/components/ui/mini-player";
import confetti from "canvas-confetti";
import clsx from "clsx";

const GRID_SIZE = 3;
const TILE_COUNT = GRID_SIZE * GRID_SIZE;
const TILE_SIZE = 100 / GRID_SIZE + "%";
const IMAGE_URL = "/dino.jpg";


function isSolved(order: number[]) {
    return order.every((val, idx) => val === idx);
}

function getAdjacentIndexes(index: number) {
    const adj = [];
    const row = Math.floor(index / GRID_SIZE);
    const col = index % GRID_SIZE;

    // Up
    if (row > 0) adj.push(index - GRID_SIZE);
    // Down
    if (row < GRID_SIZE - 1) adj.push(index + GRID_SIZE);
    // Left
    if (col > 0) adj.push(index - 1);
    // Right
    if (col < GRID_SIZE - 1) adj.push(index + 1);

    return adj;
}

const tracks = [
    {
        src: "/music/ambient_night.mp3",
        title: "Night Space",
    },
    {
        src: "/music/anime_banger.mp3",
        title: "Anime Banger",
    },
    {
        src: "/music/adventure.mp3",
        title: "Adventure",
    },
];

const getRandomPosition = (maxX: number, maxY: number) => ({
    x: Math.random() * maxX,
    y: Math.random() * maxY,
});

const PlayBox: React.FC = () => {

    const [current, setCurrent] = React.useState(0);
    const [playing, setPlaying] = React.useState(false);


    const items = [
        {
            description: (
                <MiniPlayer
                    tracks={tracks}
                    current={current}
                    setCurrent={setCurrent}
                    playing={playing}
                    setPlaying={setPlaying}
                />
            ),
            header: (
                <MiniplayerBox
                    tracks={tracks}
                    current={current}
                    setCurrent={setCurrent}
                    setPlaying={setPlaying}
                />
            ),
            className: "md:col-span-1",
            icon: (
                <div className="relative group h-5 w-5 flex items-start justify-start">
                    <span className="absolute bottom-full mb-1 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition pointer-events-none z-10 whitespace-nowrap">
                        This music was generated using AI.
                    </span>
                    <div className="rounded-full h-5 w-5 flex items-center justify-center">
                        <IconQuestionMark className="h-4 w-4 text-neutral-500 border-2 border-neutral-500 rounded-full" />
                    </div>
                </div>
            ),

        },
        {
            title: "Sliding Block Puzzle",
            // description: (
            //     <span className="text-sm">
            //         Let AI handle the proofreading of your documents.
            //     </span>
            // ),


            // header: <SlidingPuzzle />,

            header: (
                <div className="w-full max-w-xs mx-auto aspect-square max-md:h-50">
                    <SlidingPuzzle />
                </div>
            ),
            className: "md:col-span-1",
            // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Aquarium",
            description: (
                <span className="text-sm">
                    Hey! Toss me some treats — I'm starving! My developer forgot I exist.
                </span>
            ),
            header: <AquariumBox />,
            className: "md:col-span-1",
            icon: <GiFishbone className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Sentiment Analysis",
            description: (
                <span className="text-sm">
                    Understand the sentiment of your text with AI analysis.
                </span>
            ),
            header: <SkeletonFour />,
            className: "md:col-span-2",
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },

        {
            title: "Draw anything",
            description: (
                <span className="text-sm">
                    Express your creativity and bring your imagination to life through drawing!
                </span>
            ),
            header: <DrawingBox />,
            className: "md:col-span-1",
        },
    ];

    return (
        <section
            id="playbox"
            className={`h-auto text-center ${roboto_mono.className}`}
        >
            <h1 className="font-bold text-4xl mt-10">Fun Box</h1>

            {/* Bento Grid*/}
            <BentoGrid className="max-w-4xl mx-auto mt-10 md:auto-rows-[20rem]">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        title={item.title}
                        description={item.description}
                        header={item.header}
                        className={cn("[&>p:text-lg]", item.className)}
                        icon={item.icon}
                    />
                ))}
            </BentoGrid>

            <div className="my-30"></div>
        </section >
    );
};

const MiniplayerBox = ({
    tracks,
    current,
    setCurrent,
    setPlaying,
}: {
    tracks: { src: string; title: string }[];
    current: number;
    setCurrent: (n: number) => void;
    setPlaying: (b: boolean) => void;
}) => {
    const variants = {
        initial: { x: 0 },
        animate: { x: 10, rotate: 5, transition: { duration: 0.2 } },
    };
    const variantsSecond = {
        initial: { x: 0 },
        animate: { x: -10, rotate: -5, transition: { duration: 0.2 } },
    };

    return (
        <motion.div
            initial="initial"
            whileHover="animate"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
        >
            {[0, 1, 2].map((idx) => (
                <motion.div
                    key={idx}
                    variants={idx === 1 ? variantsSecond : variants}
                    className={cn(
                        "flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black cursor-pointer transition",
                        current === idx && "ring-2 ring-pink-400"
                    )}
                    onClick={() => {
                        setCurrent(idx);
                        setPlaying(true);
                    }}
                >
                    {idx === 0 && <LuMusic className="text-xl h-6 w-6 rounded-full shrink-0" />}
                    {idx === 1 && <GiMusicalNotes className="text-l h-6 w-6 rounded-full shrink-0" />}
                    {idx === 2 && <LuFileMusic className="text-xl h-6 w-6 rounded-full shrink-0" />}
                    <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
                    <span className="ml-2 text-xs text-neutral-500">{tracks[idx].title}</span>
                </motion.div>
            ))}
        </motion.div>
    );
};

const SlidingPuzzle = () => {
    const [tiles, setTiles] = useState<number[]>([]);
    const [solved, setSolved] = useState(false);

    // useEffect(() => {
    //     const initial = Array.from({ length: TILE_COUNT }, (_, i) => i);
    //     // Shuffle (Fisher-Yates)
    //     for (let i = initial.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [initial[i], initial[j]] = [initial[j], initial[i]];
    //     }
    //     setTiles(initial);
    // }, []);
    useEffect(() => {
        const makeEasyShuffle = (moves = 10) => {
            let tiles = Array.from({ length: TILE_COUNT }, (_, i) => i); // start solved
            let emptyIndex = TILE_COUNT - 1;

            for (let i = 0; i < moves; i++) {
                const adj = getAdjacentIndexes(emptyIndex);
                const rand = adj[Math.floor(Math.random() * adj.length)];
                [tiles[emptyIndex], tiles[rand]] = [tiles[rand], tiles[emptyIndex]];
                emptyIndex = rand;
            }

            return tiles;
        };

        setTiles(makeEasyShuffle(10)); // 10 easy moves
    }, []);

    // useEffect(() => {
    //     setTiles(generateSolvableShuffle(TILE_COUNT));
    // }, []);

    const launchConfetti = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.5 },
            angle: 90,
            startVelocity: 45,
            scalar: 1.2,
            ticks: 200,
        });
    };

    const moveSound = useRef<HTMLAudioElement | null>(null);
    const successSound = useRef<HTMLAudioElement | null>(null);
    const confettiFired = useRef(false);

    useEffect(() => {
        moveSound.current = new Audio("/music/puzzle_move.mp3");
        moveSound.current.volume = 0.5;

        successSound.current = new Audio("/music/success_puzzle.mp3");
        successSound.current.volume = 0.5;
    }, []);

    const handleTileClick = (index: number) => {
        const emptyIndex = tiles.indexOf(TILE_COUNT - 1);
        const adjacent = getAdjacentIndexes(emptyIndex);

        if (adjacent.includes(index)) {

            const newTiles = [...tiles];
            [newTiles[emptyIndex], newTiles[index]] = [
                newTiles[index],
                newTiles[emptyIndex],
            ];
            setTiles(newTiles);

            const nowSolved = isSolved(newTiles);
            setSolved(nowSolved);

            if (nowSolved) {
                launchConfetti();

                if (successSound.current) {
                    successSound.current.currentTime = 0;
                    successSound.current.play().catch((e) => console.error("Audio error:", e));
                }
            } else {
                if (moveSound.current) {
                    moveSound.current.currentTime = 0;
                    moveSound.current.play().catch((e) => console.error("Audio error:", e));
                }
            }
        }
    };

    return (
        <div
            className={clsx(
                "grid grid-cols-3 gap-1 aspect-square w-full h-full p-1 rounded-md transition-colors",
                solved ? "bg-green-200 dark:bg-green-700" : "bg-neutral-100 dark:bg-neutral-800"
            )}
        >
            {tiles.map((num, i) => {
                const isEmpty = num === TILE_COUNT - 1;

                const row = Math.floor(num / GRID_SIZE);
                const col = num % GRID_SIZE;

                return (
                    <motion.div
                        key={i}
                        layout
                        className={clsx(
                            "rounded-sm overflow-hidden border border-white/20 cursor-pointer",
                            isEmpty ? "bg-transparent" : "bg-neutral-100 dark:bg-neutral-800"
                        )}
                        onClick={() => !isEmpty && handleTileClick(i)}
                    >
                        {!isEmpty && (
                            <div
                                className="w-full h-full bg-no-repeat"
                                style={{
                                    backgroundImage: `url(${IMAGE_URL})`,
                                    backgroundSize: `${GRID_SIZE * 100}% ${GRID_SIZE * 100}%`, // span across full grid
                                    backgroundPosition: `${(col / (GRID_SIZE - 1)) * 100}% ${(row / (GRID_SIZE - 1)) * 100}%`,
                                }}
                            />
                        )}
                    </motion.div>
                );
            })}
        </div>
    );
};

const AquariumBox = () => {
    const aquariumRef = useRef<HTMLDivElement>(null);
    const [fishList, setFishList] = useState<
        { id: number; x: number; y: number; targetX: number; targetY: number; direction: number }[]
    >([]);

    const [food, setFood] = useState<{ id: number; x: number; y: number }[]>([]);
    const [foodId, setFoodId] = useState(0);

    const fishListRef = useRef(fishList);
    const foodRef = useRef(food);

    useEffect(() => {
        fishListRef.current = fishList;
    }, [fishList]);

    useEffect(() => {
        foodRef.current = food;
    }, [food]);

    // Initial fish placement
    useEffect(() => {
        const aquarium = aquariumRef.current;
        if (aquarium) {
            const bounds = aquarium.getBoundingClientRect();
            const fishes = Array.from({ length: 1 }).map((_, i) => {
                const pos = getRandomPosition(bounds.width - 50, bounds.height - 50);
                return {
                    id: i,
                    x: pos.x,
                    y: pos.y,
                    targetX: pos.x,
                    targetY: pos.y,
                    direction: 1, // default facing right
                };

            });
            setFishList(fishes);
        }
    }, []);

    // Drop food
    const dropFood = (e: React.MouseEvent) => {
        const aquarium = aquariumRef.current;
        if (aquarium) {
            const rect = aquarium.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const newFood = { id: foodId, x, y: 100 }; // Food falls to y = 100
            setFoodId((id) => id + 1);
            setFood((prev) => [...prev, newFood]);
        }
    };

    // Idle movement when no food
    useEffect(() => {
        if (food.length > 0) return;
        const interval = setInterval(() => {
            const aquarium = aquariumRef.current;
            if (aquarium) {
                const bounds = aquarium.getBoundingClientRect();
                setFishList((prev) =>
                    prev.map((fish) => {
                        const { x, y } = getRandomPosition(bounds.width - 50, bounds.height - 50);
                        return { ...fish, targetX: x, targetY: y };
                    })
                );
            }
        }, 1000);
        return () => clearInterval(interval);
    }, [food]);

    // Eat food when close
    useEffect(() => {
        const interval = setInterval(() => {
            const fishes = fishListRef.current;
            const currentFood = foodRef.current;

            const remainingFood = currentFood.filter((f) => {
                return !fishes.some((fish) => {
                    const dx = f.x - fish.x;
                    const dy = f.y - fish.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    return distance < 20;
                });
            });

            if (remainingFood.length !== currentFood.length) {
                setFood(remainingFood);
            }
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            className="flex flex-col w-full h-full min-h-[6rem] rounded-b-lg dark:bg-dot-white/[0.2] bg-dot-black/[0.2]"
        >

            {/* Food Drop Area */}
            <div
                onClick={dropFood}
                className="h-16 text-center flex items-center justify-center cursor-pointer"
            >
                Click to drop fish food
            </div>

            {/* Aquarium Area */}
            <motion.div
                ref={aquariumRef}
                className="relative w-full rounded-lg overflow-hidden"
                style={{
                    background: "linear-gradient(to bottom, #87ceeb 0%, #1e90ff 100%)",
                    height: "clamp(200px, 40vh, 400px)", // Responsive height: min 200px, max 400px, preferred 40vh
                }}
            >
                {/* <div className="absolute bottom-0 w-full h-10 bg-green-950" /> */}
                {/* Fish Food */}
                {food.map((f) => (
                    <motion.div
                        key={f.id}
                        className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                        initial={{ y: 0, opacity: 1 }}
                        animate={{ y: f.y, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeIn" }}
                        style={{ left: f.x }}
                    />
                ))}

                {/* Fish */}
                {fishList.map((fish) => (
                    <motion.img
                        key={fish.id}
                        src="/fish.png"
                        alt="Fish"
                        className="absolute w-10 h-auto"
                        animate={{
                            x: food.length > 0 ? food[food.length - 1].x - 16 : fish.targetX,
                            y: food.length > 0 ? food[food.length - 1].y - 8 : fish.targetY,
                        }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                        style={{
                            scaleX: fish.direction,
                        }}
                        onUpdate={(latest) => {
                            setFishList((prev) =>
                                prev.map((f) => {
                                    if (f.id !== fish.id) return f;

                                    const newX = typeof latest.x === "string" ? parseFloat(latest.x) : latest.x ?? f.x;
                                    const newY = typeof latest.y === "string" ? parseFloat(latest.y) : latest.y ?? f.y;

                                    const direction = newX > f.x ? -1 : 1; //flip

                                    return {
                                        ...f,
                                        x: newX,
                                        y: newY,
                                        direction,
                                    };
                                })
                            );
                        }}

                    />

                ))}
            </motion.div>
        </motion.div>
    );
};

const SkeletonFour = () => {
    const first = {
        initial: {
            x: 20,
            rotate: -5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    const second = {
        initial: {
            x: -20,
            rotate: 5,
        },
        hover: {
            x: 0,
            rotate: 0,
        },
    };
    return (
        <motion.div
            initial="initial"
            animate="animate"
            whileHover="hover"
            className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-row space-x-2"
        >
            <motion.div
                variants={first}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Just code in Vanilla Javascript
                </p>
                <p className="border border-red-500 bg-red-100 dark:bg-red-900/20 text-red-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Delusional
                </p>
            </motion.div>
            <motion.div className="h-full relative z-20 w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center">
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    Tailwind CSS is cool, you know
                </p>
                <p className="border border-green-500 bg-green-100 dark:bg-green-900/20 text-green-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Sensible
                </p>
            </motion.div>
            <motion.div
                variants={second}
                className="h-full w-1/3 rounded-2xl bg-white p-4 dark:bg-black dark:border-white/[0.1] border border-neutral-200 flex flex-col items-center justify-center"
            >
                <img
                    src="https://pbs.twimg.com/profile_images/1417752099488636931/cs2R59eW_400x400.jpg"
                    alt="avatar"
                    height="100"
                    width="100"
                    className="rounded-full h-10 w-10"
                />
                <p className="sm:text-sm text-xs text-center font-semibold text-neutral-500 mt-4">
                    I love angular, RSC, and Redux.
                </p>
                <p className="border border-orange-500 bg-orange-100 dark:bg-orange-900/20 text-orange-600 text-xs rounded-full px-2 py-0.5 mt-4">
                    Helpless
                </p>
            </motion.div>
        </motion.div>
    );
};

const DrawingBox = () => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    const [isDrawing, setIsDrawing] = React.useState(false);
    const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
    const [isErasing, setIsErasing] = React.useState(false);
    const [brushColor, setBrushColor] = React.useState<string>("#000000");
    const [brushSize, setBrushSize] = React.useState<number>(2);
    const [showColorPicker, setShowColorPicker] = React.useState(false);
    const [showSizePicker, setShowSizePicker] = React.useState(false);

    // Close dropdowns when clicking outside
    React.useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (!(e.target as HTMLElement).closest(".dropdown-button")) {
                setShowColorPicker(!showColorPicker);
                setShowSizePicker(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Initialize canvas and context
    React.useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            if (ctx) {
                // Set canvas size to match parent
                const parent = canvasRef.current.parentElement;
                if (parent) {
                    const dpr = window.devicePixelRatio || 1;
                    canvasRef.current.width = parent.clientWidth * dpr;
                    canvasRef.current.height = parent.clientHeight * dpr;
                    canvasRef.current.style.width = `${parent.clientWidth}px`;
                    canvasRef.current.style.height = `${parent.clientHeight}px`;
                    ctx.scale(dpr, dpr);
                }
                ctx.fillStyle = "rgba(0, 0, 0, 0)";
                ctx.fillRect(0, 0, canvasRef.current.width / (window.devicePixelRatio || 1), canvasRef.current.height / (window.devicePixelRatio || 1));
                ctx.globalCompositeOperation = "source-over";
                setContext(ctx);
            }
        }
    }, []);

    // Handle mouse down to start drawing or erasing
    const startDrawing = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (context) {
            setIsDrawing(true);
            const rect = canvasRef.current?.getBoundingClientRect();
            const x = event.clientX - (rect?.left || 0);
            const y = event.clientY - (rect?.top || 0);
            context.beginPath();
            context.moveTo(x, y);
            if (isErasing) {
                context.globalCompositeOperation = "destination-out";
                context.lineWidth = brushSize;
                // context.strokeStyle = "rgba(0,0,0,0)";
            } else {
                context.globalCompositeOperation = "source-over";
                context.lineWidth = brushSize;
                context.strokeStyle = brushColor;
            }

        }
    };

    // Handle mouse move to draw or erase
    const draw = (event: React.MouseEvent<HTMLCanvasElement>) => {
        if (isDrawing && context) {
            const rect = canvasRef.current?.getBoundingClientRect();
            const x = event.clientX - (rect?.left || 0);
            const y = event.clientY - (rect?.top || 0);

            if (isErasing) {
                context.globalCompositeOperation = "destination-out";
                // context.strokeStyle = "rgba(0,0,0,0)";
            } else {
                context.globalCompositeOperation = "source-over";
                context.strokeStyle = brushColor;
            }

            context.lineWidth = brushSize;
            context.lineTo(x, y);
            context.stroke();
        }
    };


    // Handle mouse up to stop drawing or erasing
    const stopDrawing = () => {
        setIsDrawing(false);
        if (context) {
            context.closePath();
            context.globalCompositeOperation = "source-over";
        }
    };

    // Toggle eraser mode
    const toggleEraser = () => {
        setIsErasing(!isErasing);
    };

    // Save canvas as image
    const saveCanvasAsImage = () => {
        if (canvasRef.current) {
            const dataUrl = canvasRef.current.toDataURL("image/png");
            const link = document.createElement("a");
            link.href = dataUrl;
            link.download = "drawing.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative flex flex-1 flex-col rounded-md overflow-visible h-[300px] sm:h-full"
        >
            <canvas
                ref={canvasRef}
                onMouseDown={startDrawing}
                onMouseMove={draw}
                onMouseUp={stopDrawing}
                onMouseOut={stopDrawing}
                className="w-full h-full flex-1 rounded-md bg-white"
            // style={{ cursor: isErasing ? "grab" : "crosshair" }}
            />
            <div className="absolute bottom-0 right-0 flex items-end gap-2 rounded-tl-lg shadow-md z-50">
                {/* Eraser */}
                <button
                    onClick={toggleEraser}
                    className={`relative group p-2 rounded-full text-black ${isErasing
                        ? "bg-gradient-to-r from-pink-500 to-violet-500 "
                        : "bg-red-500 hover:bg-gray-400"
                        } transition`}
                >
                    <span className="tooltip">
                        {isErasing ? "Draw" : "Eraser"}
                    </span>
                    {isErasing ? <LuPen className="h-5 w-5" /> : <LuEraser className="h-5 w-5" />}
                </button>

                {/* Download */}
                <button
                    onClick={saveCanvasAsImage}
                    className="relative group p-2 rounded-full bg-green-500 text-black hover:bg-green-600 transition"
                >
                    <span className="tooltip">
                        Download the drawing.
                    </span>
                    <LuDownload className="h-5 w-5" />
                </button>

                {/* Color Picker (click) */}
                <div className="relative group dropdown-button">
                    <span className="tooltip">
                        Change color
                    </span>
                    <input
                        type="color"
                        value={brushColor}
                        onChange={(e) => {
                            setBrushColor(e.target.value);
                            setIsErasing(false);
                        }}
                        className="w-8 h-8 rounded-full border border-black cursor-pointer"
                        style={{ padding: 0 }}
                    />
                </div>


                {/* Size Picker (click) */}
                <div className="relative group dropdown-button">
                    <button
                        onClick={() => {
                            setShowSizePicker(!showSizePicker);
                            setShowColorPicker(false);
                        }}
                        className="w-8 h-8 rounded-full bg-gray-300 border border-gray-500 flex items-center justify-center"
                    >
                        <div className="rounded-full bg-black" style={{ width: brushSize, height: brushSize }} />
                    </button>
                    <span className="tooltip">
                        Resize
                    </span>
                    {showSizePicker && (
                        <div className="absolute bottom-full right-0 mb-2 flex gap-1 p-2 bg-white rounded shadow z-10">
                            {[2, 4, 6, 8, 10, 14, 18, 24].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => {
                                        setBrushSize(size);
                                        setShowSizePicker(false);
                                    }}
                                    className={`rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center transition`}
                                    style={{
                                        width: size + 10,
                                        height: size + 10,
                                        border: brushSize === size ? "2px solid black" : "1px solid gray"
                                    }}
                                >
                                    <div className="bg-black rounded-full" style={{ width: size, height: size }} />
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>


        </motion.div>
    );
};

export default PlayBox;