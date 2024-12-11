import Image from 'next/image';
import Link from 'next/link';
import {
	ArrowRight,
	ChevronDown,
	LightbulbIcon,
	RocketIcon,
	CheckCircle2Icon,
	Menu,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function ProgramsPage() {
	return (
		<div className="min-h-screen bg-[#0B0E13] text-white">
			{/* Header */}
			<header className="border-b border-gray-800">
				<div className="container mx-auto px-4">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center gap-2">
							<Image
								src="/flow-logo.png"
								alt="Flow Logo"
								width={32}
								height={32}
								className="text-green-400"
							/>
							<span className="font-bold text-green-400">
								Flow L1
							</span>
						</div>

						{/* Desktop Navigation */}
						<nav className="hidden md:flex items-center gap-8">
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-1">
									Flow VMs <ChevronDown className="h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										Flow EVM
									</DropdownMenuItem>
									<DropdownMenuItem>
										Flow Cadence
									</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<DropdownMenu>
								<DropdownMenuTrigger className="flex items-center gap-1">
									Developers{' '}
									<ChevronDown className="h-4 w-4" />
								</DropdownMenuTrigger>
								<DropdownMenuContent>
									<DropdownMenuItem>
										Documentation
									</DropdownMenuItem>
									<DropdownMenuItem>GitHub</DropdownMenuItem>
								</DropdownMenuContent>
							</DropdownMenu>
							<Link href="#" className="hover:text-green-400">
								Ecosystem
							</Link>
							<Link href="#" className="hover:text-green-400">
								Community
							</Link>
							<Link href="#" className="hover:text-green-400">
								Careers
							</Link>
						</nav>

						{/* Mobile Menu */}
						<Sheet>
							<SheetTrigger asChild>
								<Button
									variant="ghost"
									size="icon"
									className="md:hidden"
								>
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent
								side="right"
								className="bg-[#0B0E13] border-gray-800"
							>
								<nav className="flex flex-col gap-4">
									<Link
										href="#"
										className="hover:text-green-400"
									>
										Chains
									</Link>
									<Link
										href="#"
										className="hover:text-green-400"
									>
										Developers
									</Link>
									<Link
										href="#"
										className="hover:text-green-400"
									>
										Ecosystem
									</Link>
									<Link
										href="#"
										className="hover:text-green-400"
									>
										Community
									</Link>
									<Link
										href="#"
										className="hover:text-green-400"
									>
										Careers
									</Link>
								</nav>
							</SheetContent>
						</Sheet>

						<div className="hidden md:flex items-center gap-4">
							<Button variant="ghost">Contact Us</Button>
							<Button>Get Started</Button>
						</div>
					</div>
				</div>
			</header>

			{/* Main Content */}
			<main className="container mx-auto px-4 py-12">
				<div className="text-center mb-16">
					<h1
						className="text-4xl md:text-6xl font-bold tracking-wider mb-6"
						style={{ fontFamily: 'monospace' }}
					>
						<span className="text-green-400">FLOW</span> BUILDER
						SUPPORT
					</h1>
					<p className="text-gray-400 max-w-3xl mx-auto">
						Flow L1 offers grants, funding incentives, and
						comprehensive support at every stage of your Web3
						project development journey.
					</p>
				</div>

				<div className="mb-16">
					<h2 className="text-2xl font-semibold mb-8">
						Find Programs that Fits Your Projects
					</h2>
					<div className="grid md:grid-cols-3 gap-4">
						<Button
							variant="outline"
							className="h-auto py-6 flex flex-col items-start text-left"
						>
							<div className="flex items-center gap-2 mb-2">
								<LightbulbIcon className="h-5 w-5" />
								<span className="font-semibold">Ideation</span>
							</div>
							<span className="text-sm text-gray-400">
								If you have an idea to build on Flow L1
							</span>
						</Button>
						<Button
							variant="outline"
							className="h-auto py-6 flex flex-col items-start text-left"
						>
							<div className="flex items-center gap-2 mb-2">
								<RocketIcon className="h-5 w-5" />
								<span className="font-semibold">
									Deployment
								</span>
							</div>
							<span className="text-sm text-gray-400">
								If your project is currently being built
							</span>
						</Button>
						<Button
							variant="outline"
							className="h-auto py-6 flex flex-col items-start text-left"
						>
							<div className="flex items-center gap-2 mb-2">
								<CheckCircle2Icon className="h-5 w-5" />
								<span className="font-semibold">
									Post Deployment
								</span>
							</div>
							<span className="text-sm text-gray-400">
								If your project is live and needs support
							</span>
						</Button>
					</div>
				</div>

				<div className="grid lg:grid-cols-[250px_1fr] gap-8">
					{/* Filters Sidebar */}
					<aside className="space-y-6">
						<div>
							<h3 className="text-lg font-semibold mb-4">
								Filters
							</h3>
							<div className="space-y-4">
								<h4 className="text-sm font-medium">
									Incentives
								</h4>
								<div className="space-y-2">
									<div className="flex items-center space-x-2">
										<Checkbox id="grants" />
										<label
											htmlFor="grants"
											className="text-sm"
										>
											Dev Tooling
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="grants" />
										<label
											htmlFor="grants"
											className="text-sm"
										>
											Grants
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="funding" />
										<label
											htmlFor="funding"
											className="text-sm"
										>
											Funding
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="monetary" />
										<label
											htmlFor="monetary"
											className="text-sm"
										>
											Monetary
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="incubation" />
										<label
											htmlFor="incubation"
											className="text-sm"
										>
											Incubation
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="investment" />
										<label
											htmlFor="investment"
											className="text-sm"
										>
											Investment
										</label>
									</div>
									<div className="flex items-center space-x-2">
										<Checkbox id="discounts" />
										<label
											htmlFor="discounts"
											className="text-sm"
										>
											Discounts & Offers
										</label>
									</div>
								</div>
							</div>
						</div>
					</aside>

					{/* Programs Grid */}
					<div className="space-y-6">
						<Card className="bg-[#1A1D23] border-gray-800 p-6">
							<div className="flex items-start justify-between mb-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Flow 1-Click dApp
									</h3>
									<div className="flex gap-2 mb-4">
										<Badge
											variant="secondary"
											className="bg-blue-500/20 text-blue-400"
										>
											Dev Tooling
										</Badge>
										<Badge
											variant="secondary"
											className="bg-yellow-500/20 text-yellow-400"
										>
											Incubation
										</Badge>
									</div>
									<div className="text-sm text-gray-400">
										Available Anytime
									</div>
								</div>
								<Button variant="ghost" size="icon">
									<ArrowRight className="h-4 w-4" />
								</Button>
							</div>
							<p className="text-gray-400">
								The quarterly hackathon is open to all
								developers or idea stage projects. Showcase your
								project to compete for a prize pool worth of
								hundreds of thousands of dollars in rewards and
								benefits!
							</p>
						</Card>

						<Card className="bg-[#1A1D23] border-gray-800 p-6">
							<div className="flex items-start justify-between mb-4">
								<div>
									<h3 className="text-xl font-semibold mb-2">
										Flow Fast Grant
									</h3>
									<div className="flex gap-2 mb-4">
										<Badge
											variant="secondary"
											className="bg-emerald-500/20 text-emerald-400"
										>
											Grant
										</Badge>
										<Badge
											variant="secondary"
											className="bg-orange-500/20 text-orange-400"
										>
											Monetary
										</Badge>
									</div>
									<div className="text-sm text-gray-400">
										Available Anytime
									</div>
								</div>
								<Button variant="ghost" size="icon">
									<ArrowRight className="h-4 w-4" />
								</Button>
							</div>
							<p className="text-gray-400">
								The Flow Foundation Fast Grant is a streamlined
								funding program designed to support innovative
								builders and projects in the Flow ecosystem.
								Applicants receive approval within 72 hours,
								providing rapid access to funding for
								development, prototyping, or scaling impactful
								ideas.
							</p>
						</Card>
					</div>
				</div>
			</main>
		</div>
	);
}
