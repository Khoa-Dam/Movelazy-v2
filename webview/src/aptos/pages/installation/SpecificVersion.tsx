"use client"
import { Card, CardContent } from "../../components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export default function AdvancedInstallationGuide() {
    return (
        <div className="min-h-screen bg-black p-6">
            <div className="mx-auto max-w-3xl space-y-8">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold text-white">Install Specific Aptos CLI Versions (Advanced)</h1>
                    <p className="text-gray-400">
                        If you need a specific version of the Aptos CLI, you can build it directly from the Aptos source code. This
                        installation method is primarily used to interact with specific features on Devnet which may not have made
                        it to Testnet / Mainnet yet. You may also want to follow these steps if you are running an architecture
                        which does not play well with the existing releases / pre-compiled binaries.
                    </p>
                    <p className="text-gray-400">
                        If you do not need this advanced method, you can find the normal install steps{" "}
                        <a href="#" className="text-blue-400 hover:underline">
                            here
                        </a>
                        .
                    </p>
                </div>

                <Tabs defaultValue="unix" className="space-y-6">
                    <TabsList className="bg-gray-900">
                        <TabsTrigger value="unix" className="data-[state=active]:bg-gray-800">
                            Install on macOS / Linux
                        </TabsTrigger>
                        <TabsTrigger value="windows" className="data-[state=active]:bg-gray-800">
                            Install on Windows
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="unix" className="space-y-6">
                        <section className="space-y-6">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            1
                                        </span>
                                        <p>
                                            Follow the steps to{" "}
                                            <a href="#" className="text-blue-400 hover:underline">
                                                build Aptos from source
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            2
                                        </span>
                                        <p>
                                            Ensure you have <code className="bg-gray-800 px-1 py-0.5 rounded">cargo</code> installed by
                                            following the steps on{" "}
                                            <a href="#" className="text-blue-400 hover:underline">
                                                this page
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            3
                                        </span>
                                        <p>Build the CLI tool:</p>
                                    </div>
                                    <Card className="border-gray-800 bg-gray-900">
                                        <CardContent className="p-4">
                                            <pre className="text-sm text-gray-300">
                                                <code>cargo build --package aptos --profile cli</code>
                                            </pre>
                                        </CardContent>
                                    </Card>
                                    <p className="text-gray-400 pl-8">
                                        The binary will be available at{" "}
                                        <code className="bg-gray-800 px-1 py-0.5 rounded">target/cli/aptos</code>
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            4
                                        </span>
                                        <p>(Optional) Move this executable to a place in your PATH.</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            5
                                        </span>
                                        <p>Verify the installation worked by running</p>
                                    </div>
                                    <Card className="border-gray-800 bg-gray-900">
                                        <CardContent className="p-4">
                                            <pre className="text-sm text-gray-300">
                                                <code>target/cli/aptos help</code>
                                            </pre>
                                        </CardContent>
                                    </Card>
                                    <p className="text-gray-400 pl-8">
                                        These help instructions also serve as a useful detailed guide for specific commands.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </TabsContent>

                    <TabsContent value="windows" className="space-y-6">
                        <section className="space-y-6">
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            1
                                        </span>
                                        <p>
                                            Follow the steps to build Aptos from source{" "}
                                            <a href="#" className="text-blue-400 hover:underline">
                                                here
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            2
                                        </span>
                                        <p>
                                            Ensure you have <code className="bg-gray-800 px-1 py-0.5 rounded">cargo</code> installed by
                                            following the steps on{" "}
                                            <a href="#" className="text-blue-400 hover:underline">
                                                this page
                                            </a>
                                            .
                                        </p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            3
                                        </span>
                                        <p>Build the CLI tool:</p>
                                    </div>
                                    <Card className="border-gray-800 bg-gray-900">
                                        <CardContent className="p-4">
                                            <pre className="text-sm text-gray-300">
                                                <code>cargo build --package aptos --profile cli</code>
                                            </pre>
                                        </CardContent>
                                    </Card>
                                    <p className="text-gray-400 pl-8">
                                        The binary will be available at{" "}
                                        <code className="bg-gray-800 px-1 py-0.5 rounded">target\cli\aptos.exe</code>
                                    </p>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            4
                                        </span>
                                        <p>(Optional) Move this executable to a place in your PATH.</p>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex items-center gap-2 text-white">
                                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-700">
                                            5
                                        </span>
                                        <p>Verify the installation worked by running</p>
                                    </div>
                                    <Card className="border-gray-800 bg-gray-900">
                                        <CardContent className="p-4">
                                            <pre className="text-sm text-gray-300">
                                                <code>target\cli\aptos.exe help</code>
                                            </pre>
                                        </CardContent>
                                    </Card>
                                    <p className="text-gray-400 pl-8">
                                        These help instructions also serve as a useful detailed guide for specific commands.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}
