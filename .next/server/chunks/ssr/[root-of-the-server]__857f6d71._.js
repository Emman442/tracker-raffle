module.exports = {

"[project]/src/lib/utils.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}}),
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Button": (()=>Button),
    "buttonVariants": (()=>buttonVariants)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, variant, size, asChild = false, ...props }, ref)=>{
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : "button";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 46,
        columnNumber: 7
    }, this);
});
Button.displayName = "Button";
;
}}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[externals]/process [external] (process, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("process", () => require("process"));

module.exports = mod;
}}),
"[project]/anchor/target/idl/token_lottery.json (json)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v(JSON.parse("{\"address\":\"47EsfkJnYeZVuf3WTfzE5a2V5RSnaHm3GhTs8QcA3ah8\",\"metadata\":{\"name\":\"raffle\",\"version\":\"0.1.0\",\"spec\":\"0.1.0\",\"description\":\"Created with Anchor\"},\"instructions\":[{\"name\":\"buy_ticket\",\"discriminator\":[11,24,17,193,168,116,164,169],\"accounts\":[{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"token_lottery\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[116,111,107,101,110,95,108,111,116,116,101,114,121]}]}},{\"name\":\"payer_token_account\",\"writable\":true},{\"name\":\"raffle_vault_account\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"token_lottery\"},{\"kind\":\"account\",\"path\":\"token_program\"},{\"kind\":\"account\",\"path\":\"token_mint\"}],\"program\":{\"kind\":\"const\",\"value\":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{\"name\":\"token_mint\"},{\"name\":\"ticket_mint\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"token_lottery.total_tickets\",\"account\":\"TokenLottery\"}]}},{\"name\":\"ticket_metadata\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"destination\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"payer\"},{\"kind\":\"account\",\"path\":\"token_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"}],\"program\":{\"kind\":\"const\",\"value\":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{\"name\":\"collection_metadata\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"collection_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"ticket_master_edition\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"},{\"kind\":\"const\",\"value\":[101,100,105,116,105,111,110]}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"collection_master_edition\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"collection_mint\"},{\"kind\":\"const\",\"value\":[101,100,105,116,105,111,110]}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"token_metadata_program\",\"address\":\"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s\"},{\"name\":\"collection_mint\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,108,108,101,99,116,105,111,110,95,109,105,110,116]}]}},{\"name\":\"metadata\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"master_edition\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"},{\"kind\":\"const\",\"value\":[101,100,105,116,105,111,110]}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"associated_token_program\",\"address\":\"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL\"},{\"name\":\"token_program\"},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"}],\"args\":[]},{\"name\":\"callback_choose_winner\",\"discriminator\":[204,21,207,229,118,187,143,149],\"accounts\":[{\"name\":\"vrf_program_identity\",\"docs\":[\"This check ensure that the vrf_program_identity (which is a PDA) is a singer\",\"enforcing the callback is executed by the VRF program trough CPI\"],\"signer\":true,\"address\":\"9irBy75QS2BN81FUgXuHcjqceJJRuc9oDkAe8TKVvvAw\"},{\"name\":\"token_lottery\",\"writable\":true}],\"args\":[{\"name\":\"randomness\",\"type\":{\"array\":[\"u8\",32]}}]},{\"name\":\"claim_winnings\",\"discriminator\":[161,215,24,59,14,236,242,221],\"accounts\":[{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"token_lottery\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[116,111,107,101,110,95,108,111,116,116,101,114,121]}]}},{\"name\":\"reward_mint\"},{\"name\":\"reward_vault\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"token_lottery\"},{\"kind\":\"account\",\"path\":\"token_program\"},{\"kind\":\"account\",\"path\":\"reward_mint\"}],\"program\":{\"kind\":\"const\",\"value\":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{\"name\":\"winner_token_account\",\"writable\":true},{\"name\":\"collection_mint\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,108,108,101,99,116,105,111,110,95,109,105,110,116]}]}},{\"name\":\"ticket_mint\",\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"token_lottery.winner\",\"account\":\"TokenLottery\"}]}},{\"name\":\"metadata\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"destination\",\"pda\":{\"seeds\":[{\"kind\":\"account\",\"path\":\"payer\"},{\"kind\":\"account\",\"path\":\"token_program\"},{\"kind\":\"account\",\"path\":\"ticket_mint\"}],\"program\":{\"kind\":\"const\",\"value\":[140,151,37,143,78,36,137,241,187,61,16,41,20,142,13,131,11,90,19,153,218,255,16,132,4,142,123,216,219,233,248,89]}}},{\"name\":\"collection_metadata\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"collection_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"token_program\"},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"token_metadata_program\",\"address\":\"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s\"}],\"args\":[]},{\"name\":\"commit_winner\",\"discriminator\":[66,108,203,58,168,20,82,15],\"accounts\":[{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"token_lottery\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[116,111,107,101,110,95,108,111,116,116,101,114,121]}]}},{\"name\":\"oracle_queue\",\"writable\":true,\"address\":\"Cuj97ggrhhidhbu39TijNVqE74xvKJ69gDervRUXAxGh\"},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"program_identity\",\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[105,100,101,110,116,105,116,121]}]}},{\"name\":\"vrf_program\",\"address\":\"Vrf1RNUjXmQGjmQrQLvJHs9SNkvDJEsRVFPkfSQUwGz\"},{\"name\":\"slot_hashes\",\"address\":\"SysvarS1otHashes111111111111111111111111111\"}],\"args\":[{\"name\":\"client_seed\",\"type\":\"u8\"}]},{\"name\":\"initialize_config\",\"discriminator\":[208,127,21,1,194,190,196,70],\"accounts\":[{\"name\":\"signer\",\"writable\":true,\"signer\":true},{\"name\":\"token_lottery\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[116,111,107,101,110,95,108,111,116,116,101,114,121]}]}},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"}],\"args\":[{\"name\":\"start_time\",\"type\":\"u64\"},{\"name\":\"end_time\",\"type\":\"u64\"},{\"name\":\"price\",\"type\":\"u64\"}]},{\"name\":\"initialize_lottery\",\"discriminator\":[113,199,243,247,73,217,33,11],\"accounts\":[{\"name\":\"payer\",\"writable\":true,\"signer\":true},{\"name\":\"collection_mint\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,108,108,101,99,116,105,111,110,95,109,105,110,116]}]}},{\"name\":\"collection_token_account\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[99,111,108,108,101,99,116,105,111,110,95,97,115,115,111,99,105,97,116,101,100,95,116,111,107,101,110]}]}},{\"name\":\"metadata\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"collection_mint\"}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"master_edition\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[109,101,116,97,100,97,116,97]},{\"kind\":\"account\",\"path\":\"token_metadata_program\"},{\"kind\":\"account\",\"path\":\"collection_mint\"},{\"kind\":\"const\",\"value\":[101,100,105,116,105,111,110]}],\"program\":{\"kind\":\"account\",\"path\":\"token_metadata_program\"}}},{\"name\":\"token_metadata_program\",\"address\":\"metaqbxxUerdq28cj1RbAWkYQm3ybzjb6a8bt518x1s\"},{\"name\":\"associated_token_account\",\"address\":\"ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL\"},{\"name\":\"token_program\"},{\"name\":\"system_program\",\"address\":\"11111111111111111111111111111111\"},{\"name\":\"rent\",\"address\":\"SysvarRent111111111111111111111111111111111\"}],\"args\":[]},{\"name\":\"restart_lottery\",\"discriminator\":[108,227,99,131,243,47,187,86],\"accounts\":[{\"name\":\"token_lottery\",\"writable\":true,\"pda\":{\"seeds\":[{\"kind\":\"const\",\"value\":[116,111,107,101,110,95,108,111,116,116,101,114,121]}]}},{\"name\":\"authority\",\"signer\":true}],\"args\":[{\"name\":\"new_start_time\",\"type\":\"u64\"},{\"name\":\"new_end_time\",\"type\":\"u64\"},{\"name\":\"new_ticket_price\",\"type\":\"u64\"}]}],\"accounts\":[{\"name\":\"TokenLottery\",\"discriminator\":[219,174,104,58,76,30,61,218]}],\"events\":[{\"name\":\"BoughtTicket\",\"discriminator\":[101,104,196,151,92,225,230,158]},{\"name\":\"InitializedConfig\",\"discriminator\":[164,105,22,100,12,70,246,93]},{\"name\":\"InitializedLottery\",\"discriminator\":[255,31,194,72,173,230,164,114]},{\"name\":\"SelectWinner\",\"discriminator\":[206,182,105,137,223,198,29,129]},{\"name\":\"WinnerCommited\",\"discriminator\":[140,75,139,176,235,114,130,191]},{\"name\":\"WinningsClaimed\",\"discriminator\":[187,184,29,196,54,117,70,150]}],\"errors\":[{\"code\":6000,\"name\":\"LotteryNotOpen\",\"msg\":\"Lottery is not open yet.\"},{\"code\":6001,\"name\":\"NotAuthorized\",\"msg\":\"You're Not Authorized!.\"},{\"code\":6002,\"name\":\"RandomnessAlreadyRevealed\",\"msg\":\"Randomnes Already Revealed\"},{\"code\":6003,\"name\":\"LotteryNotCompleted\",\"msg\":\"Lottery Not Completed\"},{\"code\":6004,\"name\":\"IncorrectRandomnessAccount\",\"msg\":\"Incorrect Randomness Account\"},{\"code\":6005,\"name\":\"RandomnessNotResolved\",\"msg\":\"Randomness Not Resolved\"},{\"code\":6006,\"name\":\"WinnerChosen\",\"msg\":\"Winner Already Chosen\"},{\"code\":6007,\"name\":\"IncorrectTicket\",\"msg\":\"Ticket Is Incorrect\"},{\"code\":6008,\"name\":\"WinnerNotChosen\",\"msg\":\"Winner Not Chosen\"},{\"code\":6009,\"name\":\"NotVerifiedTicket\",\"msg\":\"Ticket Not Verified\"}],\"types\":[{\"name\":\"BoughtTicket\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"price\",\"type\":\"u64\"},{\"name\":\"current_total_tickets\",\"type\":\"u64\"}]}},{\"name\":\"InitializedConfig\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"start_time\",\"type\":\"u64\"},{\"name\":\"end_time\",\"type\":\"u64\"},{\"name\":\"price\",\"type\":\"u64\"}]}},{\"name\":\"InitializedLottery\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"collection_mint\",\"type\":\"pubkey\"}]}},{\"name\":\"SelectWinner\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"winner\",\"type\":\"u64\"},{\"name\":\"winner_chosen\",\"type\":\"bool\"}]}},{\"name\":\"TokenLottery\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"winner\",\"type\":\"u64\"},{\"name\":\"winner_chosen\",\"type\":\"bool\"},{\"name\":\"start_time\",\"type\":\"u64\"},{\"name\":\"end_time\",\"type\":\"u64\"},{\"name\":\"pot_amount\",\"type\":\"u64\"},{\"name\":\"total_tickets\",\"type\":\"u64\"},{\"name\":\"ticket_price\",\"type\":\"u64\"},{\"name\":\"authority\",\"type\":\"pubkey\"},{\"name\":\"bump\",\"type\":\"u8\"}]}},{\"name\":\"WinnerCommited\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"oracle_queue\",\"type\":\"pubkey\"}]}},{\"name\":\"WinningsClaimed\",\"type\":{\"kind\":\"struct\",\"fields\":[{\"name\":\"ticket_name\",\"type\":\"string\"},{\"name\":\"destination_account\",\"type\":\"pubkey\"}]}}],\"constants\":[{\"name\":\"NAME\",\"type\":\"string\",\"value\":\"\\\"Token Lottery Ticket #\\\"\"},{\"name\":\"SEED\",\"type\":\"string\",\"value\":\"\\\"anchor\\\"\"},{\"name\":\"symbol\",\"type\":\"string\",\"value\":\"\\\"TLT\\\"\"},{\"name\":\"url\",\"type\":\"string\",\"value\":\"\\\"https://raw.githubusercontent.com/Emman442/Quiz-application-with-leaderboard-feature/main/mpl.json\\\\n\\\"\"}]}"));}}),
"[project]/anchor/src/token_lottery-exports.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Here we export some useful types and functions for interacting with the Anchor program.
__turbopack_context__.s({
    "TOKEN_LOTTERY_PROGRAM_ID": (()=>TOKEN_LOTTERY_PROGRAM_ID),
    "getTokenLotteryProgram": (()=>getTokenLotteryProgram),
    "gettokenLotteryId": (()=>gettokenLotteryId)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/anchor/target/idl/token_lottery.json (json)");
;
;
;
;
const TOKEN_LOTTERY_PROGRAM_ID = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"](__TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__["default"].address);
function getTokenLotteryProgram(provider, address) {
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"]({
        ...__TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__["default"],
        address: address ? address.toBase58() : __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__["default"].address
    }, provider);
}
function gettokenLotteryId(cluster) {
    switch(cluster){
        case 'devnet':
        case 'testnet':
            // This is the program ID for the Counter program on devnet and testnet.
            return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"]("47EsfkJnYeZVuf3WTfzE5a2V5RSnaHm3GhTs8QcA3ah8b");
        case 'mainnet-beta':
        default:
            return TOKEN_LOTTERY_PROGRAM_ID;
    }
}
}}),
"[project]/anchor/src/token_lottery-exports.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/anchor/target/idl/token_lottery.json (json)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$src$2f$token_lottery$2d$exports$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/anchor/src/token_lottery-exports.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/anchor/src/index.ts [app-ssr] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$src$2f$token_lottery$2d$exports$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/anchor/src/token_lottery-exports.ts [app-ssr] (ecmascript) <module evaluation>");
;
}}),
"[project]/anchor/src/index.ts [app-ssr] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$src$2f$token_lottery$2d$exports$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/anchor/src/token_lottery-exports.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/anchor/src/index.ts [app-ssr] (ecmascript) <locals>");
}}),
"[project]/anchor/target/idl/token_lottery.json (json) <export default as tokenLotteryIDL>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "tokenLotteryIDL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__ = __turbopack_context__.i("[project]/anchor/target/idl/token_lottery.json (json)");
}}),
"[project]/src/hooks/use-program.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "useProgram": (()=>useProgram)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/index.js [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/provider.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/esm/program/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useAnchorWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$src$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/anchor/src/index.ts [app-ssr] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__$3c$export__default__as__tokenLotteryIDL$3e$__ = __turbopack_context__.i("[project]/anchor/target/idl/token_lottery.json (json) <export default as tokenLotteryIDL>");
;
;
;
;
const useProgram = ()=>{
    const wallet = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useAnchorWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAnchorWallet"])();
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const { program, provider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!wallet?.publicKey) return {
            program: null,
            provider: null
        };
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$provider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnchorProvider"](connection, wallet, {
            commitment: "confirmed"
        });
        const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$esm$2f$program$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Program"](__TURBOPACK__imported__module__$5b$project$5d2f$anchor$2f$target$2f$idl$2f$token_lottery$2e$json__$28$json$29$__$3c$export__default__as__tokenLotteryIDL$3e$__["tokenLotteryIDL"], provider);
        return {
            program,
            provider
        };
    }, [
        connection,
        wallet
    ]);
    return {
        program,
        provider
    };
};
}}),
"[project]/src/components/BuyTicketCard.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>BuyTicketCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useConnection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/wallet-adapter-react/lib/esm/useWallet.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ticket.js [app-ssr] (ecmascript) <export default as Ticket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@solana/web3.js/lib/index.esm.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$program$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-program.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$cjs$2f$utils$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@coral-xyz/anchor/dist/cjs/utils/token.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
function BuyTicketCard() {
    const { connected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useWallet$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWallet"])();
    const [currentLottery, setCurrentLottery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isBuyingTicket, setIsBuyingTicket] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { connection } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$wallet$2d$adapter$2d$react$2f$lib$2f$esm$2f$useConnection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useConnection"])();
    const { program, provider } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$program$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useProgram"])();
    const lotteryPDA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (!program) return null;
        try {
            const [pda] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PublicKey"].findProgramAddressSync([
                Buffer.from("token_lottery")
            ], program.programId);
            return pda;
        } catch (error) {
            console.error("Error calculating rewardVaultPda:", error);
            return null;
        }
    }, [
        program
    ]);
    const fetchLotteryDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!program) return;
        try {
            const account = await program.account.tokenLottery.fetch(lotteryPDA);
            console.log("account: ", account);
            setCurrentLottery(account);
        } catch (err) {
            console.error("Error fetching lottery details:", err);
        }
    }, [
        program,
        lotteryPDA
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchLotteryDetails();
    }, [
        fetchLotteryDetails
    ]);
    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            scale: 1
        }
    };
    console.log(currentLottery);
    const handleBuyTicket = async ()=>{
        if (!program) return;
        try {
            setIsBuyingTicket(true);
            const tx = await program.methods.buyTicket().accounts({
                //@ts-ignore
                tokenProgram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$coral$2d$xyz$2f$anchor$2f$dist$2f$cjs$2f$utils$2f$token$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOKEN_PROGRAM_ID"]
            }).rpc();
            await new Promise((resolve)=>setTimeout(resolve, 2000));
            const txDetails = await connection.getTransaction(tx, {
                commitment: "confirmed",
                maxSupportedTransactionVersion: 0
            });
            if (!txDetails) {
                throw new Error("Transaction not found or not confirmed");
            }
            const logs = txDetails?.meta?.logMessages;
            const eventLog = logs?.find((l)=>l.startsWith("Program data:"));
            if (eventLog) {
                const encoded = eventLog.replace("Program data: ", "");
                const decoded = program.coder.events.decode(encoded);
                if (decoded?.name === "boughtTicket") {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Ticket Purchased Successfully!", {
                        cancel: {
                            label: "View Transaction",
                            onClick: ()=>window.open(`https://solscan.io/tx/${tx}`, "_blank")
                        }
                    });
                    return;
                }
            }
        } catch (err) {
            console.error("Error Purchasing Ticket:", err);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Something went wrong while purchasing ticket.");
        } finally{
            setIsBuyingTicket(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        initial: "hidden",
        animate: "visible",
        transition: {
            duration: 0.5,
            ease: "easeInOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "max-w-md mx-auto bg-card/50 backdrop-blur-sm",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-auto bg-primary/10 p-3 rounded-full w-fit",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ticket$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Ticket$3e$__["Ticket"], {
                                className: "h-8 w-8 text-primary"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuyTicketCard.tsx",
                                lineNumber: 123,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyTicketCard.tsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "text-[#00FF9C] mt-4 text-3xl",
                            children: "Buy a Lottery Ticket"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyTicketCard.tsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: [
                                "Current ticket price is",
                                " ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-bold text-primary",
                                    children: [
                                        currentLottery?.ticketPrice.toNumber() / __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$solana$2f$web3$2e$js$2f$lib$2f$index$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LAMPORTS_PER_SOL"] || 0,
                                        " ",
                                        "SOL"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/BuyTicketCard.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/BuyTicketCard.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/BuyTicketCard.tsx",
                    lineNumber: 121,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: !connected ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-muted-foreground",
                        children: "Please connect your wallet to buy a ticket."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyTicketCard.tsx",
                        lineNumber: 138,
                        columnNumber: 13
                    }, this) : currentLottery?.winnerChosen || currentLottery == null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-yellow-500",
                        children: "The lottery is currently closed."
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyTicketCard.tsx",
                        lineNumber: 142,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        whileHover: {
                            scale: 1.05
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleBuyTicket,
                            disabled: isBuyingTicket,
                            className: "w-full text-lg py-6",
                            children: isBuyingTicket ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/src/components/BuyTicketCard.tsx",
                                lineNumber: 153,
                                columnNumber: 19
                            }, this) : "Buy Ticket Now"
                        }, void 0, false, {
                            fileName: "[project]/src/components/BuyTicketCard.tsx",
                            lineNumber: 147,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/BuyTicketCard.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/BuyTicketCard.tsx",
                    lineNumber: 136,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/BuyTicketCard.tsx",
            lineNumber: 120,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/BuyTicketCard.tsx",
        lineNumber: 114,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__857f6d71._.js.map